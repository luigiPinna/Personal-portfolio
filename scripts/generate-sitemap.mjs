/* Generates public/sitemap.xml and public/robots.txt.
 * Run manually after adding pages or blog posts: `npm run sitemap`. */
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
  .filter((p) => !p.draft);

// Static routes + every published blog post.
const urls = [
  { loc: `${SITE}/`, priority: '1.0' },
  { loc: `${SITE}/blog`, priority: '0.7' },
  ...posts.map((p) => ({
    loc: `${SITE}/blog/${p.slug}`,
    lastmod: p.date,
    priority: '0.6',
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>${
        u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''
      }\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

fs.mkdirSync(PUBLIC_DIR, { recursive: true });
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml);
fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robots);

console.log(`sitemap.xml — ${urls.length} urls`);
console.log('robots.txt — written');
