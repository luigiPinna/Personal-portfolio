import { useLocalTime } from '@/lib/hooks';

export default function Footer() {
  const time = useLocalTime();
  return (
    <footer className="border-t border-line py-7 font-mono text-[11px] text-ink-mute">
      <div className="shell flex flex-wrap items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Luigi Pinna · Hand-coded in Cagliari</div>
        <div>v6.0 · last build 16 May 2026 · {time}</div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-1 rounded border border-line-strong bg-bg-2 px-1.5 py-0.5 text-[11px] text-ink-soft transition-colors hover:border-ink hover:text-ink"
        >
          ↑ back to top
        </button>
      </div>
    </footer>
  );
}
