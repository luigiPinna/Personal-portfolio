import { cn } from '@/lib/utils';

/* Shared section header — matches the three-col title row used across the page. */
export default function SectionHead({ num, title, meta }) {
  return (
    <div className="mb-10 grid items-baseline gap-6 md:grid-cols-[80px_1fr_auto]">
      <div className="font-mono text-[12px] text-ink-mute">— {num}</div>
      <h2 className="m-0 font-sans text-[clamp(28px,4.5vw,44px)] font-medium leading-none tracking-[-0.02em]">
        {title}
      </h2>
      <div className={cn('font-mono text-[11px] tracking-[0.04em] text-ink-mute md:text-right')}>
        {meta}
      </div>
    </div>
  );
}
