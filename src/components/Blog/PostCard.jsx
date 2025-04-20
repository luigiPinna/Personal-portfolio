import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  PostCard as StyledPostCard,
  CardImage,
  CardContent,
  Category,
  CardTitle,
  PostExcerpt,
  PostMeta,
  ReadMore,
} from './BlogStyles';

const PostCard = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <StyledPostCard>
      <CardImage>
        <Image
          src={post.image}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </CardImage>
      <CardContent>
        <Category>{post.category}</Category>
        <CardTitle>
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </CardTitle>
        <PostExcerpt>{post.excerpt}</PostExcerpt>
        <PostMeta>
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{post.author}</span>
        </PostMeta>
        <Link href={`/blog/${post.slug}`} passHref legacyBehavior>
          <ReadMore>
            Leggi di più
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </ReadMore>
        </Link>
      </CardContent>
    </StyledPostCard>
  );
};

export default PostCard;
