import { stack } from '@/lib/data';
import { useInView } from '@/lib/hooks';
import SectionHead from './SectionHead';

export default function Stack() {
  const [ref, seen] = useInView();
  return (
    <section
      id="stack"
      ref={ref}
      className="border-b border-line py-16 md:pt-16 md:pb-20"
    >
      <div className="shell">
        <SectionHead num="04" title="Stack" meta="self-assessed · 2026" />

        <div className="grid gap-6 md:grid-cols-[80px_1fr]">
          <div className="hidden md:block" />
          <div className="grid border-t border-line md:grid-cols-2">
            {stack.map((cat, i) => (
              <div
                key={cat.name}
                className={
                  'border-b border-line py-6 ' +
                  (i % 2 === 0 ? 'md:border-r md:pr-6' : 'md:pl-6')
                }
              >
                <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mute">
                  <span className="mr-2 text-accent">{cat.num}</span>
                  {cat.name}
                </div>
                {cat.items.map((s) => (
                  <div
                    key={s.name}
                    className="grid grid-cols-[1fr_60px] items-center gap-4 py-1.5"
                  >
                    <div className="font-sans text-[16px] font-medium text-ink">{s.name}</div>
                    <div className="relative h-1.5 overflow-hidden rounded-sm bg-line">
                      <div
                        className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)]"
                        style={{ width: seen ? s.level + '%' : 0 }}
                      >
                        <span className="absolute inset-y-0 right-0 w-0.5 bg-accent" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
