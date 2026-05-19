import { useEffect, useRef, useState } from 'react';

export function useLocalTime(tz = 'Europe/Rome') {
  /* Start with a stable placeholder so SSR and first client render match.
   * The real time is filled in after mount, avoiding hydration mismatches. */
  const [t, setT] = useState('--:--:--');
  useEffect(() => {
    setT(fmt(tz));
    const id = setInterval(() => setT(fmt(tz)), 1000);
    return () => clearInterval(id);
  }, [tz]);
  return t;
}

function fmt(tz) {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(new Date());
  } catch (e) {
    return new Date().toTimeString().slice(0, 8);
  }
}

export function useInView(opts = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setSeen(true); },
      { threshold: 0.2, ...opts }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

/* Smooth-scrolls to an element id; returns onClick handler. */
export function smoothTo(id) {
  return (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
}

/* Scroll-spy: returns the id of the section whose top has crossed `offset` px
 * from the viewport top. Assumes the ids appear in DOM order. */
export function useActiveSection(ids, enabled = true, offset = 100) {
  const [active, setActive] = useState(null);
  const key = ids.join(',');

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    let ticking = false;

    function update() {
      let current = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= offset) current = id;
        else break;
      }
      /* Edge case: at the bottom of the page, the last section may never
       * reach the offset. Force-activate it so short final sections light up. */
      const docHeight = document.documentElement.scrollHeight;
      const atBottom = window.innerHeight + window.scrollY >= docHeight - 4;
      if (atBottom && ids.length > 0) current = ids[ids.length - 1];
      setActive(current);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [key, enabled, offset]);

  return active;
}
