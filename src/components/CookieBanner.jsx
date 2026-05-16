import { useEffect, useState } from 'react';
import { Button } from './ui/button';

const STORAGE_KEY = 'lp-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const persist = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md"
    >
      <div className="rounded-md border border-line bg-bg-2 p-4 shadow-lg">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute">
          ● Cookie notice
        </div>
        <p className="m-0 mb-4 font-sans text-[13.5px] leading-[1.5] text-ink-soft">
          This site uses only essential cookies to remember your theme preference. No
          tracking, no analytics, no third-party scripts.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" onClick={() => persist('accepted')}>
            Got it
          </Button>
          <Button size="sm" variant="ghost" onClick={() => persist('declined')}>
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}
