import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import {
  getPostBySlug,
  getAllPublishedSlugs,
  regularPosts,
  formatDate,
  readingTimeMin,
} from '@/lib/blog';

export async function getStaticPaths() {
  return {
    paths: getAllPublishedSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { notFound: true };
  const others = regularPosts
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);
  return { props: { post, others } };
}

export default function BlogPost({ post, others }) {
  const bodyRef = useRef(null);

  useEffect(() => {
    if (!bodyRef.current) return;
    bodyRef.current.querySelectorAll('a[href^="http"]').forEach((a) => {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });
  }, [post.slug]);

  return (
    <>
      <Head>
        <title>{post.title} — Luigi Pinna</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <TopBar />
      <main>
        <article>
          <header className="border-b border-line py-12 md:pt-16 md:pb-14">
            <div className="shell">
              <div className="grid gap-8 md:grid-cols-[160px_1fr]">
                <aside className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-mute">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
                  >
                    <span>←</span> Back to writing
                  </Link>
                  <div className="my-3 h-px bg-line" />
                  <div>{formatDate(post.date)}</div>
                  <div>{post.category}</div>
                  <div className="mt-2">{readingTimeMin(post.content)} min read</div>
                  <div className="my-3 h-px bg-line" />
                  <div className="text-ink-soft">{post.author}</div>
                </aside>
                <div>
                  <h1 className="m-0 font-sans text-[clamp(34px,5.5vw,64px)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
                    {post.title}
                  </h1>
                  <p className="mt-6 m-0 max-w-[65ch] font-sans text-[clamp(17px,1.6vw,21px)] leading-[1.45] text-ink-soft">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </div>
          </header>

          <section className="border-b border-line py-12 md:py-16">
            <div className="shell">
              <div className="grid gap-8 md:grid-cols-[160px_1fr]">
                <div className="hidden md:block" />
                <div
                  ref={bodyRef}
                  className="article-body max-w-[68ch] font-sans"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
          </section>
        </article>

        {others.length > 0 && (
          <section className="py-12 md:py-16">
            <div className="shell">
              <div className="grid gap-8 md:grid-cols-[160px_1fr]">
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mute">
                  — More
                </div>
                <div className="border-t border-line">
                  {others.map((o) => (
                    <Link
                      key={o.id}
                      href={`/blog/${o.slug}`}
                      className="group flex items-baseline justify-between gap-6 border-b border-line py-5 transition-colors hover:bg-bg-2"
                    >
                      <div>
                        <div className="font-sans text-[18px] font-medium tracking-[-0.015em] text-ink transition-colors group-hover:text-accent">
                          {o.title}
                        </div>
                        <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-mute">
                          {formatDate(o.date)} · {o.category}
                        </div>
                      </div>
                      <span className="font-mono text-[12px] text-ink-mute transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
