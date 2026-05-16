import { useState } from 'react';
import { contact } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Contact() {
  const [toast, setToast] = useState('');

  const copy = (val, label) => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(val).then(() => {
      setToast(`${label} copied`);
      setTimeout(() => setToast(''), 1400);
    });
  };

  return (
    <section id="contact" className="py-24 pb-16">
      <div className="shell">
        <div className="grid items-end gap-6 md:grid-cols-[80px_1fr_1fr]">
          <div className="font-mono text-[12px] text-ink-mute">— 05</div>
          <h2 className="m-0 font-sans text-[clamp(40px,6vw,80px)] font-medium leading-[0.95] tracking-[-0.025em]">
            Let's <em className="font-serif font-normal italic text-accent">build</em>{' '}
            something <br />worth shipping.
          </h2>

          <div className="flex flex-col">
            {contact.map((c, i) => (
              <a
                key={c.k}
                href={c.href}
                target={c.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (c.copyable) {
                    e.preventDefault();
                    copy(c.v, c.k);
                  }
                }}
                className={cn(
                  'group grid grid-cols-[80px_1fr_auto] items-baseline border-t border-line py-3.5 font-mono text-[13px] text-ink transition-all hover:pl-2 hover:text-accent',
                  i === contact.length - 1 && 'border-b'
                )}
              >
                <span className="text-[11px] tracking-[0.04em] text-ink-mute">
                  {c.k.toUpperCase()}
                </span>
                <span>{c.v}</span>
                <span className="text-[12px] text-ink-mute group-hover:text-accent">
                  {c.copyable ? '⎘ copy' : '↗'}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* toast */}
      <div
        className={cn(
          'fixed bottom-6 left-1/2 z-[100] rounded-full bg-ink px-4.5 py-2.5 font-mono text-[12px] text-bg transition-all duration-200',
          toast
            ? 'translate-x-[-50%] translate-y-[-6px] opacity-100'
            : 'translate-x-[-50%] opacity-0 pointer-events-none'
        )}
      >
        {toast}
      </div>
    </section>
  );
}
