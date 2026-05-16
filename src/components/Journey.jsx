import { useState } from 'react';
import { journey } from '@/lib/data';
import { cn } from '@/lib/utils';
import SectionHead from './SectionHead';

export default function Journey() {
  const [openIds, setOpenIds] = useState(() => new Set([0]));

  const toggle = (i) =>
    setOpenIds((s) => {
      const n = new Set(s);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });

  return (
    <section id="journey" className="border-b border-line py-16 md:pt-16 md:pb-20">
      <div className="shell">
        <SectionHead num="03" title="Journey" meta="click to expand" />

        <div className="md:pl-[104px]">
          {journey.map((j, i) => {
            const open = openIds.has(i);
            return (
              <article
                key={i}
                onClick={() => toggle(i)}
                className={cn(
                  'grid cursor-pointer items-baseline gap-6 border-t border-line py-6',
                  'grid-cols-[60px_1fr_auto] md:grid-cols-[100px_1fr_auto]',
                  i === journey.length - 1 && 'border-b'
                )}
              >
                <div className="font-mono text-[12px] tracking-[0.04em] text-ink-mute">
                  {j.year}
                </div>
                <div>
                  <div className="font-sans text-[19px] font-medium tracking-[-0.01em] text-ink">
                    {j.title}{' '}
                    <span className="font-normal text-ink-mute">@ {j.company}</span>
                    <span
                      className={cn(
                        'ml-2 inline-block w-3.5 font-mono text-[12px] transition-transform',
                        open ? 'rotate-45 text-accent' : 'text-ink-mute'
                      )}
                    >
                      +
                    </span>
                  </div>
                  <div
                    className={cn(
                      'col-start-2 max-w-[70ch] font-sans text-[14px] leading-[1.55] text-ink-soft overflow-hidden transition-all duration-300',
                      open ? 'mt-4 max-h-[400px] opacity-100' : 'mt-0 max-h-0 opacity-0'
                    )}
                  >
                    {j.body}
                    {j.stack && j.stack.length > 0 && (
                      <div className="mt-3.5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-ink-mute">
                        {j.stack.map((s) => (
                          <span key={s}>
                            <span className="mr-0.5 text-accent">→</span> {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <span
                  className={cn(
                    'self-center rounded-full border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em]',
                    j.type === 'education'
                      ? 'border-accent text-accent'
                      : 'border-line-strong text-ink-mute'
                  )}
                >
                  {j.type}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
