import { useEffect, useRef, useState } from 'react';

export function useLocalTime(tz = 'Europe/Rome') {
  const [t, setT] = useState(() => fmt(tz));
  useEffect(() => {
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
