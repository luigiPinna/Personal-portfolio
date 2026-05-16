import { useMemo, useState } from 'react';
import { projects } from '@/lib/data';
import { cn } from '@/lib/utils';
import SectionHead from './SectionHead';

export default function Work() {
  const [filter, setFilter] = useState('all');

  const filters = useMemo(() => {
    const counts = { all: projects.length, ai: 0, web: 0, fun: 0 };
    projects.forEach((p) => (counts[p.type] = (counts[p.type] || 0) + 1));
    return [
      { id: 'all', label: 'Everything', count: counts.all },
      { id: 'ai',  label: 'AI',         count: counts.ai },
      { id: 'web', label: 'Web apps',   count: counts.web },
      { id: 'fun', label: 'For fun',    count: counts.fun },
    ];
  }, []);

  const visible = filter === 'all' ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="work" className="border-b border-line py-16 md:pt-16 md:pb-20">
      <div className="shell">
        <SectionHead
          num="01"
          title="Selected work"
          meta={`${visible.length} of ${projects.length} · 2021–2026`}
        />

        <div className="mb-7 flex flex-wrap gap-2 md:pl-[104px]">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                'cursor-pointer rounded-full border px-3 py-1.5 font-mono text-[11px] transition-colors',
                filter === f.id
                  ? 'border-ink bg-ink text-bg'
                  : 'border-line-strong text-ink-soft hover:border-ink hover:text-ink'
              )}
            >
              {f.label}
              <span
                className={cn(
                  'ml-1.5 text-[10px]',
                  filter === f.id ? 'text-bg/60' : 'text-ink-mute'
                )}
              >
                {f.count}
              </span>
            </button>
          ))}
        </div>

        <div className="border-t border-line">
          {visible.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }) {
  const idx = String(index + 1).padStart(2, '0');
  return (
    <article
      className={cn(
        'group relative grid cursor-pointer items-start gap-6 border-b border-line py-6 transition-colors hover:bg-bg-2',
        'grid-cols-[32px_1fr] md:grid-cols-[80px_1fr_2fr_1fr_auto]'
      )}
    >
      <div className="font-mono text-[12px] text-ink-mute">
        {idx} / {project.year}
      </div>

      <div>
        <div className="font-sans text-[22px] font-medium leading-tight tracking-[-0.015em] text-ink">
          {project.title}
        </div>
        <div className="mt-1 font-mono text-[12px] text-ink-mute">{project.role}</div>
      </div>

      <div className="col-start-2 max-w-[60ch] font-sans text-[14px] leading-[1.5] text-ink-soft md:col-start-auto">
        {project.desc}
      </div>

      <div className="col-start-2 flex flex-wrap gap-x-2 gap-y-1 md:col-start-auto">
        {project.tags.map((t, i) => (
          <span key={t} className="font-mono text-[10px] tracking-[0.04em] text-ink-mute">
            {i > 0 && <span className="mr-1.5 text-line-strong">·</span>}
            {t}
          </span>
        ))}
      </div>

      <div className="col-start-2 flex gap-2.5 self-center font-mono text-[11px] text-ink-mute opacity-0 transition-opacity group-hover:opacity-100 md:col-start-auto">
        {project.source ? (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-line-strong px-2 py-1 transition-colors hover:border-ink hover:text-ink"
          >
            source ↗
          </a>
        ) : (
          <span className="rounded border border-line-strong px-2 py-1 opacity-40">source —</span>
        )}
        {project.visit ? (
          <a
            href={project.visit}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-line-strong px-2 py-1 transition-colors hover:border-ink hover:text-ink"
          >
            live ↗
          </a>
        ) : (
          <span className="rounded border border-line-strong px-2 py-1 opacity-40">live —</span>
        )}
      </div>
    </article>
  );
}
