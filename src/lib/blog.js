import blogData from '@/data/blogPosts.json';

export const featuredPost = blogData.featuredPost && !blogData.featuredPost.draft
  ? blogData.featuredPost
  : null;

export const regularPosts = (blogData.posts || []).filter((p) => !p.draft);

export const allPosts = [
  blogData.featuredPost,
  ...(blogData.posts || []),
].filter(Boolean);

export const publishedPosts = allPosts.filter((p) => !p.draft);

export function getPostBySlug(slug) {
  return allPosts.find((p) => p.slug === slug) || null;
}

export function getAllPublishedSlugs() {
  return publishedPosts.map((p) => p.slug);
}

export function getCategories() {
  return [...new Set(publishedPosts.map((p) => p.category))];
}

export function formatDate(iso) {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function readingTimeMin(html) {
  const text = String(html || '').replace(/<[^>]*>/g, ' ').trim();
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
