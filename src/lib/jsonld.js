/* schema.org structured data — invisible on the page, read by search engines
 * and AI crawlers. Builders return plain objects; pages inline them inside
 * <Head> as <script type="application/ld+json">. */

export const SITE = 'https://luigipinna.com';

/** The person this whole site is about — main entity of the homepage. */
export const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Luigi Pinna',
  url: `${SITE}/`,
  image: `${SITE}/images/hero_img.png`,
  jobTitle: 'Software Engineer',
  worksFor: { '@type': 'Organization', name: 'Aevoluta' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cagliari',
    addressCountry: 'IT',
  },
  email: 'luigipinna3@gmail.com',
  knowsAbout: [
    'FastAPI',
    'React',
    'PostgreSQL',
    'OpenAI',
    'Anthropic Claude',
    'Azure AI Search',
    'AI Agents',
    'Retrieval-Augmented Generation',
  ],
  // Profiles that reference the same person.
  sameAs: [
    'https://github.com/luigiPinna',
    'https://www.linkedin.com/in/luigipinna/',
  ],
};

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Luigi Pinna',
  url: `${SITE}/`,
  inLanguage: 'en',
  author: { '@type': 'Person', name: 'Luigi Pinna', url: `${SITE}/` },
};

/** A single blog article. */
export function articleLd(post) {
  const url = `${SITE}/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: `${SITE}/og.png`,
    inLanguage: 'it',
    articleSection: post.category,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Person', name: post.author || 'Luigi Pinna', url: `${SITE}/` },
    publisher: { '@type': 'Person', name: 'Luigi Pinna' },
  };
}

/** The writing index — a Blog node listing its posts. */
export function blogLd(posts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Writing — Luigi Pinna',
    url: `${SITE}/blog`,
    author: { '@type': 'Person', name: 'Luigi Pinna', url: `${SITE}/` },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE}/blog/${p.slug}`,
      datePublished: p.date,
    })),
  };
}
