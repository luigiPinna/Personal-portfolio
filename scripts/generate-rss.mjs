/* Generates public/feed.xml (RSS 2.0) from the blog posts.
 * Run manually after adding a post: `npm run rss`. */
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://luigipinna.com';
const ROOT = path.resolve(process.cwd());
const PUBLIC_DIR = path.join(ROOT, 'public');

const blog = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'src', 'data', 'blogPosts.json'), 'utf8')
);

const posts = [blog.featuredPost, ...(blog.posts || [])]
  .filter(Boolean)
  .filter((p) => !p.draft)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const esc = (s) =>
  String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const cdata = (s) => `<![CDATA[${String(s || '').replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;

const items = posts
  .map(
    (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${cdata(p.excerpt)}</description>
      <content:encoded>${cdata(p.content)}</content:encoded>
    </item>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Luigi Pinna — Writing</title>
    <link>${SITE}/blog</link>
    <description>Notes on AI in production, remote work, and the quiet parts of building software.</description>
    <language>it</language>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

fs.mkdirSync(PUBLIC_DIR, { recursive: true });
fs.writeFileSync(path.join(PUBLIC_DIR, 'feed.xml'), xml);

console.log(`feed.xml — ${posts.length} items`);
