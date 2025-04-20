import React from 'react';
import { Layout } from '../../layout/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import blogPosts from '../../data/blogPosts.json';

const PostContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background1};
  padding: 12rem 2rem 8rem;
`;

const PostWrapper = styled.article`
  max-width: 80rem;
  margin: 0 auto;
`;

const PostImage = styled.div`
  position: relative;
  width: 100%;
  height: 60rem;
  overflow: hidden;
  margin-bottom: 4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PostContent = styled.div`
  max-width: 70rem;
  margin: 0 auto;
`;

const Category = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.primary1};
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 2rem;
  font-weight: 500;
`;

const PostTitle = styled.h1`
  font-size: 4.8rem;
  color: ${props => props.theme.colors.primary1};
  margin-bottom: 2rem;
  font-family: ${props => props.theme.fonts.title};
  line-height: 1.2;
  font-weight: 700;
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.primary2};
  font-size: 1.4rem;
  margin-bottom: 6rem;
  font-weight: 400;

  span {
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`;

const PostBody = styled.div`
  color: ${props => props.theme.colors.primary2};
  font-size: 1.8rem;
  line-height: 1.8;
  font-weight: 400;

  p {
    margin-bottom: 3rem;
  }
`;

const BlogPost = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Layout>
      <PostContainer>
        <PostWrapper>
          <PostImage>
            <Image
              src={post.image}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </PostImage>
          <PostContent>
            <Category>{post.category}</Category>
            <PostTitle>{post.title}</PostTitle>
            <PostMeta>
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{post.author}</span>
            </PostMeta>
            <PostBody>
              <p>{post.content}</p>
            </PostBody>
          </PostContent>
        </PostWrapper>
      </PostContainer>
    </Layout>
  );
};

export async function getStaticPaths() {
  const allPosts = [blogPosts.featuredPost, ...blogPosts.posts];
  const paths = allPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPosts = [blogPosts.featuredPost, ...blogPosts.posts];
  const post = allPosts.find((post) => post.slug === params.slug);

  return {
    props: {
      post,
    },
  };
}

export default BlogPost; 