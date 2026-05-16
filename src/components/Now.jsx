import { useLocalTime } from '@/lib/hooks';
import SectionHead from './SectionHead';

const ROWS = [
  { k: 'role',    v: 'Software Engineer @ Aevoluta' },
  { k: 'stack',   v: 'FastAPI · React · OpenAI · Azure AI' },
  { k: 'reading', v: 'Designing ML Systems — Chip Huyen' },
  { k: 'side',    v: 'Fine-tuning small models for niche RAG' },
  { k: 'status',  v: 'Open to interesting freelance', accent: true },
];

export default function Now() {
  const time = useLocalTime();
  return (
    <section id="now" className="border-b border-line py-16 md:pt-16 md:pb-20">
      <div className="shell">
        <SectionHead num="02" title="Now" meta={`updated 16.05.2026 · ${time}`} />

        <div className="grid gap-6 md:grid-cols-[80px_1fr_1fr]">
          <div className="hidden md:block" />
          <p className="m-0 max-w-[38ch] font-sans text-[clamp(18px,1.5vw,22px)] leading-[1.55] tracking-[-0.005em] text-ink">
            Leading complex projects for major{' '}
            <em className="font-serif font-normal italic text-accent">banking clients</em>{' '}
            at Aevoluta — designing, developing and deploying end-to-end.
            Exploring better ways to ship{' '}
            <em className="font-serif font-normal italic text-accent">&nbsp;AI features</em>{' '}
            as a default part of the product, not a side bolt-on.
          </p>
          <div className="flex flex-col gap-3.5 font-mono text-[12px] text-ink-soft">
            {ROWS.map((r) => (
              <div key={r.k} className="grid grid-cols-[80px_1fr] items-baseline gap-4">
                <span className="tracking-[0.04em] text-ink-mute">{r.k}</span>
                <span className={r.accent ? 'text-accent' : 'text-ink'}>{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
