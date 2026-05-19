import { useEffect } from 'react';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from './ui/command';
import { useTheme } from './ThemeProvider';
import { projects, meta } from '@/lib/data';

export default function CommandPalette({ open, setOpen }) {
  const { setTheme } = useTheme();

  /* global hotkeys — ⌘K / Ctrl-K toggle, "/" to open. */
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setOpen]);

  const run = (fn) => () => { fn(); setOpen(false); };

  const goto = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command — or jump to a section, project, theme…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>

        <CommandGroup heading="Navigate">
          <CommandItem onSelect={run(() => window.scrollTo({ top: 0, behavior: 'smooth' }))}>
            <span className="font-mono text-[12px] text-ink-mute">↑</span>
            <span>Top of page</span>
            <CommandShortcut>G T</CommandShortcut>
          </CommandItem>
          {[
            ['work',    'Selected work', '01', 'G W'],
            ['now',     'Now',           '02', 'G N'],
            ['journey', 'Journey',       '03', 'G J'],
            ['stack',   'Stack',         '04', 'G S'],
            ['contact', 'Contact',       '05', 'G C'],
          ].map(([id, label, ico, hint]) => (
            <CommandItem key={id} onSelect={run(() => goto(id))}>
              <span className="font-mono text-[12px] text-ink-mute">{ico}</span>
              <span>{label}</span>
              <CommandShortcut>{hint}</CommandShortcut>
            </CommandItem>
          ))}
          <CommandItem onSelect={run(() => (window.location.href = '/blog'))}>
            <span className="font-mono text-[12px] text-ink-mute">06</span>
            <span>Writing</span>
            <CommandShortcut>G B</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandGroup heading="Theme">
          {[
            ['light',     'Paper (light)',   '☼', 'T 1'],
            ['dark',      'Terminal (dark)', '☾', 'T 2'],
            ['blueprint', 'Blueprint',       '◇', 'T 3'],
          ].map(([id, label, ico, hint]) => (
            <CommandItem key={id} onSelect={run(() => setTheme(id))}>
              <span className="font-mono text-[12px] text-ink-mute">{ico}</span>
              <span>{label}</span>
              <CommandShortcut>{hint}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Actions">
          <CommandItem onSelect={run(() => (window.location.href = 'mailto:' + meta.email))}>
            <span className="font-mono text-[12px] text-ink-mute">@</span>
            <span>Email Luigi</span>
            <CommandShortcut>↵</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={run(() => window.open('https://github.com/luigiPinna', '_blank'))}>
            <span className="font-mono text-[12px] text-ink-mute">GH</span>
            <span>Open GitHub</span>
            <CommandShortcut>↗</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={run(() => window.open('https://www.linkedin.com/in/luigipinna/', '_blank'))}>
            <span className="font-mono text-[12px] text-ink-mute">in</span>
            <span>Open LinkedIn</span>
            <CommandShortcut>↗</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={run(() => navigator.clipboard?.writeText(meta.email))}>
            <span className="font-mono text-[12px] text-ink-mute">⎘</span>
            <span>Copy email address</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandGroup heading="Projects">
          {projects.slice(0, 6).map((p) => (
            <CommandItem
              key={p.id}
              onSelect={run(() =>
                p.source ? window.open(p.source, '_blank') : goto('work')
              )}
            >
              <span className="font-mono text-[12px] text-ink-mute">→</span>
              <span>{p.title}</span>
              <CommandShortcut>{p.year}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>

      {/* foot */}
      <div className="flex items-center gap-3.5 border-t border-line px-3.5 py-2 font-mono text-[10px] text-ink-mute">
        <span>
          <Kbd>↑</Kbd> <Kbd>↓</Kbd> navigate
        </span>
        <span>
          <Kbd>↵</Kbd> select
        </span>
        <span>
          <Kbd>esc</Kbd> close
        </span>
      </div>
    </CommandDialog>
  );
}

function Kbd({ children }) {
  return (
    <kbd className="inline-flex items-center gap-1 rounded border border-line-strong bg-bg-2 px-1.5 py-0.5 font-mono text-[10px] text-ink-soft">
      {children}
    </kbd>
  );
}
