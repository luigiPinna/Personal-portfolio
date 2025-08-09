import React from "react";
import { Layout } from "../../layout/Layout";
import styled from "styled-components";
import Image from "next/image";
import blogPosts from "../../data/blogPosts.json";
import Link from "next/link";

const PostContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background1};
  padding: 12rem 2rem 8rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 10rem 2rem 6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 8rem 1.5rem 4rem;
  }
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

  @media ${(props) => props.theme.breakpoints.md} {
    height: 45rem;
    margin-bottom: 3rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 30rem;
    margin-bottom: 2.5rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PostContent = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

const Category = styled.span`
  display: inline-block;
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 2rem;
  font-weight: 500;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const PostTitle = styled.h1`
  font-size: 4.8rem;
  color: ${(props) => props.theme.colors.primary1};
  margin-bottom: 2rem;
  font-family: ${(props) => props.theme.fonts.title};
  line-height: 1.2;
  font-weight: 700;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 3.8rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
  }
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary2};
  font-size: 1.4rem;
  margin-bottom: 6rem;
  font-weight: 400;

  span {
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;

    span {
      margin-bottom: 0.5rem;
    }
  }
`;
const PostBody = styled.div`
  color: ${(props) => props.theme.colors.primary2};
  font-size: 1.8rem;
  line-height: 1.8;
  font-weight: 400;

  p {
    margin-bottom: 3rem;
  }

  // Aggiungi stili per i link
  a {
    color: ${(props) => props.theme.colors.primary1};
    text-decoration: underline;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.primary2};
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
    line-height: 1.7;

    p {
      margin-bottom: 2rem;
    }
  }
`;

const BackLink = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;

  a {
    display: inline-flex;
    align-items: center;
    color: ${(props) => props.theme.colors.primary1};
    font-size: 1.6rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.primary2};
    }

    svg {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 4rem;

    a {
      font-size: 1.4rem;

      svg {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }
`;

const BlogPost = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Layout>
      <PostContainer>
        <PostWrapper>
          <BackLink>
            <Link href="/blog">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Torna al blog
            </Link>
          </BackLink>

          <PostImage>
            <Image
              src={post.image}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              priority
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
            <PostBody dangerouslySetInnerHTML={{ __html: post.content }} />
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
