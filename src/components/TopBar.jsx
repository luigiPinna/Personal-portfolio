import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLocalTime, smoothTo, useActiveSection } from '@/lib/hooks';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

const SECTIONS = [
  { id: 'work',    label: 'Work',    num: '01' },
  { id: 'now',     label: 'Now',     num: '02' },
  { id: 'journey', label: 'Journey', num: '03' },
  { id: 'stack',   label: 'Stack',   num: '04' },
  { id: 'contact', label: 'Contact', num: '05' },
  { id: 'writing', label: 'Writing', num: '06', href: '/blog', route: true },
];

export default function TopBar({ onOpenCmd }) {
  const time = useLocalTime();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const onHome = router.pathname === '/';
  const scrollIds = SECTIONS.filter((s) => !s.route).map((s) => s.id);
  const activeScrollId = useActiveSection(scrollIds, onHome, 80);

  /* Keep the URL hash in sync with the visible section. Uses replaceState so
   * we don't push history entries or trigger a scroll. */
  useEffect(() => {
    if (!onHome || typeof window === 'undefined') return;
    const target = activeScrollId ? `#${activeScrollId}` : '';
    if (window.location.hash !== target) {
      const url = window.location.pathname + window.location.search + target;
      window.history.replaceState(null, '', url);
    }
  }, [activeScrollId, onHome]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur">
      <div className="shell grid h-[52px] grid-cols-[1fr_auto_1fr] items-center gap-6">
        {/* brand */}
        <div className="flex items-center gap-2.5 font-mono text-[12px]">
          <span className="block h-2 w-2 rounded-full bg-accent animate-pulse" />
          <Link href="/" className="text-ink hover:text-accent transition-colors">Luigi Pinna</Link>
          <span className="text-ink-mute">/</span>
          <span className="text-ink-mute">SOFTWARE ENGINEER</span>
        </div>

        {/* nav */}
        <nav className="hidden md:flex gap-[22px] font-mono text-[12px] text-ink-mute">
          {SECTIONS.map((s) => {
            if (s.route) {
              const active = router.pathname.startsWith(s.href);
              return (
                <Link
                  key={s.id}
                  href={s.href}
                  className={cn(
                    'group py-1 transition-colors hover:text-ink',
                    active && 'text-ink'
                  )}
                >
                  <span className={cn(
                    'mr-1.5 group-hover:text-accent',
                    active ? 'text-accent' : 'text-ink-mute'
                  )}>{s.num}</span>
                  {s.label}
                </Link>
              );
            }
            const isActive = onHome && activeScrollId === s.id;
            return (
              <a
                key={s.id}
                href={onHome ? `#${s.id}` : `/#${s.id}`}
                onClick={onHome ? smoothTo(s.id) : undefined}
                className={cn(
                  'group py-1 transition-colors hover:text-ink',
                  isActive && 'text-ink'
                )}
              >
                <span className={cn(
                  'mr-1.5 group-hover:text-accent',
                  isActive ? 'text-accent' : 'text-ink-mute'
                )}>{s.num}</span>
                {s.label}
              </a>
            );
          })}
        </nav>

        {/* actions */}
        <div className="flex items-center justify-end gap-2 font-mono text-[12px]">
          <span className="text-ink-mute">CAG · {time}</span>
          {onOpenCmd && (
            <button
              onClick={onOpenCmd}
              className="inline-flex items-center gap-1 rounded border border-line-strong bg-bg-2 px-[7px] py-[3px] font-mono text-[11px] text-ink-soft transition-colors hover:border-ink hover:text-ink"
              title="Command palette"
            >
              ⌘ K
            </button>
          )}
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
