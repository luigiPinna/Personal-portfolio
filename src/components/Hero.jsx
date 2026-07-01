import Image from 'next/image';
import { Button } from './ui/button';
import { meta } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useLocalTime, smoothTo } from '@/lib/hooks';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Hero() {
  const time = useLocalTime();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line pt-12 pb-24"
    >
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-[160px_1fr]">
          {/* left: portrait + identity */}
          <aside className="flex flex-row items-center gap-5 md:flex-col md:items-start md:gap-5 md:pt-1.5">
            <div className="group relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded border border-line bg-bg-2 md:h-[140px] md:w-[140px]">
              <Image
                src={`${basePath}/images/hero_img.png`}
                alt="Luigi Pinna"
                fill
                sizes="140px"
                className="object-cover object-top grayscale contrast-[1.05] transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:contrast-100"
              />
            </div>

            <div className="flex flex-col gap-1 font-mono text-[10.5px] leading-[1.5] tracking-[0.06em] text-ink-mute">
              <span className="font-medium tracking-[0.02em] text-ink">{meta.name}</span>
              <span>BACKEND · AI</span>
              <span className="my-1.5 h-px bg-line" />
              <span>{meta.location}</span>
              <span>LOCAL · {time}</span>
              <span className="mt-1.5 flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2bb673] shadow-[0_0_8px_#2bb67380]" />
                ONLINE · 2026
              </span>
            </div>
          </aside>

          {/* main */}
          <div>
            <div className="mb-7 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-mute">
              <span className="text-accent">●</span>
              <span>PORTFOLIO · v6 · 2026</span>
              <span className="text-line-strong">/</span>
              <span>{meta.handle}</span>
            </div>

            <h1 className="mb-7 m-0 font-sans text-[clamp(48px,9vw,124px)] font-medium leading-[0.95] tracking-[-0.035em] text-ink">
              <span>Software </span>
              <span className="font-serif font-normal italic tracking-[-0.025em] text-accent">engineer</span>
            </h1>

            <p className="mb-10 max-w-[60ch] m-0 font-sans text-[clamp(17px,1.6vw,21px)] leading-[1.5] text-ink-soft">
              I design and build software — backends, APIs and web apps — and weave AI into
              them, mostly with{' '}
              <em className="font-serif font-normal italic text-ink">Python</em>,{' '}
              <em className="font-serif font-normal italic text-ink">FastAPI</em>,{' '}
              <em className="font-serif font-normal italic text-ink">React</em>,{' '}
              <em className="font-serif font-normal italic text-ink">Claude</em> and{' '}
              <em className="font-serif font-normal italic text-ink">OpenAI</em>, including{' '}
              <em className="font-serif font-normal italic text-ink">agent integration</em>{' '}
              into existing systems. I care about clean, well-structured code, solid
              engineering, and shipping things tied to a real business outcome.
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-4">
              <Button asChild>
                <a href="#contact" onClick={smoothTo('contact')}>
                  Get in touch <span className="inline-block transition-transform group-hover:translate-x-0.5">↗</span>
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href="#work" onClick={smoothTo('work')}>See selected work</a>
              </Button>
            </div>

            {/* metrics */}
            <div className="mt-14 grid grid-cols-2 border-t border-line md:grid-cols-4">
              {meta.metrics.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    'pt-5 pr-4 pl-5 pb-1 border-line',
                    i < meta.metrics.length - 1 && 'border-r',
                    i === 1 && 'max-md:border-r-0'
                  )}
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute">
                    {m.k}
                  </div>
                  <div className="mt-1.5 font-sans text-[clamp(20px,2.2vw,28px)] font-medium tracking-[-0.02em] text-ink">
                    {m.v}
                    {m.unit && (
                      <span className="ml-1 font-mono text-[12px] tracking-normal text-ink-mute">
                        {m.unit}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
