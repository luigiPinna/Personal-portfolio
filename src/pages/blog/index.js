import Head from 'next/head';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import SectionHead from '@/components/SectionHead';
import CookieBanner from '@/components/CookieBanner';
import {
  featuredPost,
  regularPosts,
  getCategories,
  formatDate,
  readingTimeMin,
} from '@/lib/blog';
import { cn } from '@/lib/utils';

export default function BlogIndex() {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const visiblePosts = useMemo(() => {
    return regularPosts.filter((p) => {
      if (filter !== 'all' && p.category !== filter) return false;
      if (query) {
        const q = query.toLowerCase();
        const hay = (p.title + ' ' + p.excerpt + ' ' + p.category).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [filter, query]);

  const filters = useMemo(() => {
    const cats = getCategories();
    return [
      { id: 'all', label: 'Everything', count: regularPosts.length },
      ...cats.map((c) => ({
        id: c,
        label: c,
        count: regularPosts.filter((p) => p.category === c).length,
      })),
    ];
  }, []);

  return (
    <>
      <Head>
        <title>Writing — Luigi Pinna</title>
        <meta
          name="description"
          content="Notes on AI in production, remote work, and the quiet parts of building software, by Luigi Pinna."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <TopBar />
      <main>
        {/* Header */}
        <section className="border-b border-line py-16 md:pt-20 md:pb-20">
          <div className="shell">
            <div className="grid gap-8 md:grid-cols-[160px_1fr]">
              <aside className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-mute">
                <span className="text-accent">●</span>{' '}
                <span>WRITING · 06</span>
              </aside>
              <div>
                <h1 className="m-0 mb-6 font-sans text-[clamp(40px,7vw,84px)] font-medium leading-[0.98] tracking-[-0.035em] text-ink">
                  Notes &amp;{' '}
                  <span className="font-serif font-normal italic text-accent">essays</span>
                </h1>
                <p className="m-0 max-w-[60ch] font-sans text-[clamp(16px,1.5vw,19px)] leading-[1.5] text-ink-soft">
                  A short piece of <em className="font-serif font-normal italic text-ink">thoughts</em> and
                  quiet observations on the things I keep coming back to.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured */}
        {featuredPost && (
          <section className="border-b border-line py-12 md:py-14">
            <div className="shell">
              <SectionHead
                num="—"
                title="Featured"
                meta={`${formatDate(featuredPost.date)} · ${readingTimeMin(featuredPost.content)} min read`}
              />
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block border-y border-line py-8 transition-colors hover:bg-bg-2"
              >
                <div className="grid items-start gap-6 md:grid-cols-[80px_1fr]">
                  <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-mute">
                    {featuredPost.category}
                  </div>
                  <div>
                    <h3 className="m-0 font-sans text-[clamp(26px,3.5vw,40px)] font-medium leading-[1.1] tracking-[-0.02em] text-ink transition-colors group-hover:text-accent">
                      {featuredPost.title}
                    </h3>
                    <p className="mt-3 m-0 max-w-[68ch] font-sans text-[15px] leading-[1.55] text-ink-soft">
                      {featuredPost.excerpt}
                    </p>
                    <div className="mt-4 font-mono text-[12px] text-ink-mute">
                      Read article{' '}
                      <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* List */}
        <section className="py-12 md:py-14">
          <div className="shell">
            <SectionHead
              num="—"
              title="All writing"
              meta={`${visiblePosts.length} of ${regularPosts.length}`}
            />

            <div className="mb-7 flex flex-wrap items-center gap-3 md:pl-[104px]">
              <div className="flex flex-wrap gap-2">
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
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                className="ml-auto w-full md:w-[200px] rounded border border-line-strong bg-bg-2 px-3 py-1.5 font-mono text-[12px] text-ink placeholder:text-ink-mute focus:border-ink focus:outline-none"
              />
            </div>

            <div className="border-t border-line">
              {visiblePosts.length === 0 ? (
                <div className="py-10 text-center font-mono text-[12px] text-ink-mute">
                  No articles found.
                </div>
              ) : (
                visiblePosts.map((p, i) => <PostRow key={p.id} post={p} index={i} />)
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

function PostRow({ post, index }) {
  const idx = String(index + 1).padStart(2, '0');
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid cursor-pointer items-start gap-6 border-b border-line py-6 transition-colors hover:bg-bg-2 grid-cols-[32px_1fr] md:grid-cols-[80px_1fr_2fr_auto]"
    >
      <div className="font-mono text-[12px] text-ink-mute">
        {idx} / {formatDate(post.date)}
      </div>
      <div>
        <div className="font-sans text-[20px] font-medium leading-tight tracking-[-0.015em] text-ink transition-colors group-hover:text-accent">
          {post.title}
        </div>
        <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-mute">
          {post.category}
        </div>
      </div>
      <div className="col-start-2 max-w-[60ch] font-sans text-[14px] leading-[1.55] text-ink-soft md:col-start-auto">
        {post.excerpt}
      </div>
      <div className="col-start-2 self-center font-mono text-[11px] text-ink-mute md:col-start-auto">
        {readingTimeMin(post.content)} min
        <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
      </div>
    </Link>
  );
}
