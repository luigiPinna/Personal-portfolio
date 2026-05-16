import { useLocalTime, smoothTo } from '@/lib/hooks';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

const SECTIONS = [
  { id: 'work',    label: 'Work',    num: '01' },
  { id: 'now',     label: 'Now',     num: '02' },
  { id: 'journey', label: 'Journey', num: '03' },
  { id: 'stack',   label: 'Stack',   num: '04' },
  { id: 'contact', label: 'Contact', num: '05' },
];

export default function TopBar({ onOpenCmd }) {
  const time = useLocalTime();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur">
      <div className="shell grid h-[52px] grid-cols-[1fr_auto_1fr] items-center gap-6">
        {/* brand */}
        <div className="flex items-center gap-2.5 font-mono text-[12px]">
          <span className="block h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-ink">Luigi Pinna</span>
          <span className="text-ink-mute">/</span>
          <span className="text-ink-mute">SOFTWARE ENGINEER</span>
        </div>

        {/* nav */}
        <nav className="hidden md:flex gap-[22px] font-mono text-[12px] text-ink-mute">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={smoothTo(s.id)}
              className="group py-1 transition-colors hover:text-ink"
            >
              <span className="mr-1.5 text-ink-mute group-hover:text-accent">{s.num}</span>
              {s.label}
            </a>
          ))}
        </nav>

        {/* actions */}
        <div className="flex items-center justify-end gap-2 font-mono text-[12px]">
          <span className="text-ink-mute">CAG · {time}</span>
          <button
            onClick={onOpenCmd}
            className="inline-flex items-center gap-1 rounded border border-line-strong bg-bg-2 px-[7px] py-[3px] font-mono text-[11px] text-ink-soft transition-colors hover:border-ink hover:text-ink"
            title="Command palette"
          >
            ⌘ K
          </button>
          <div className="flex overflow-hidden rounded border border-line-strong">
            {[
              { id: 'light',     icon: '☼' },
              { id: 'dark',      icon: '☾' },
              { id: 'blueprint', icon: '◇' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={cn(
                  'px-2 py-1 font-mono text-[11px] transition-colors',
                  theme === t.id ? 'bg-ink text-bg' : 'text-ink-mute hover:text-ink'
                )}
                title={t.id}
              >
                {t.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
