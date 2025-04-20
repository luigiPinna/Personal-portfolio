import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FeaturedPost as StyledFeaturedPost,
  FeaturedImage,
  FeaturedContent,
  Category,
  PostTitle,
  PostExcerpt,
  PostMeta,
  ReadMore,
} from './BlogStyles';

const FeaturedPost = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <StyledFeaturedPost>
      <FeaturedImage>
        <Image
          src={post.image}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </FeaturedImage>
      <FeaturedContent>
        <Category>{post.category}</Category>
        <PostTitle>
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </PostTitle>
        <PostExcerpt>{post.excerpt}</PostExcerpt>
        <PostMeta>
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{post.author}</span>
        </PostMeta>
        <Link href={`/blog/${post.slug}`} passHref legacyBehavior>
          <ReadMore>
            Leggi l'articolo completo
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </ReadMore>
        </Link>
      </FeaturedContent>
    </StyledFeaturedPost>
  );
};

export default FeaturedPost; 