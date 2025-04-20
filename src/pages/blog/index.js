import React, { useState, useMemo } from "react";
import { Layout } from "../../layout/Layout";
import FeaturedPost from "../../components/Blog/FeaturedPost";
import PostCard from "../../components/Blog/PostCard";
import BlogFilter from "../../components/Blog/BlogFilter";
import blogData from "../../data/blogPosts.json";
import styled from "styled-components";
import {
  BlogContainer,
  BlogTitle,
  PostsGrid,
} from "../../components/Blog/BlogStyles";

const BlogSubtitle = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 6rem;
  color: rgba(255, 255, 255, 0.75);
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.8rem;
    margin-bottom: 4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
    margin-bottom: 3rem;
  }
`;

const NoResults = styled.p`
  text-align: center;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.75);
  grid-column: 1 / -1;
  padding: 3rem 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
    padding: 2rem 0;
  }
`;

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Estrai le categorie uniche dai post
  const categories = useMemo(() => {
    const allPosts = [blogData.featuredPost, ...blogData.posts];
    return [...new Set(allPosts.map((post) => post.category))];
  }, []);

  // Filtra i post in base alla ricerca e alla categoria
  const filteredPosts = useMemo(() => {
    return blogData.posts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        !selectedCategory || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Filtra anche il post in evidenza in base alla categoria
  const shouldShowFeaturedPost =
    !selectedCategory || blogData.featuredPost.category === selectedCategory;

  return (
    <Layout>
      <BlogContainer>
        <BlogTitle>Blog</BlogTitle>
        <BlogSubtitle>
          Articoli e riflessioni su web development, tecnologia e innovazione
        </BlogSubtitle>

        <BlogFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {shouldShowFeaturedPost && (
          <FeaturedPost post={blogData.featuredPost} />
        )}

        <PostsGrid>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <NoResults>
              Nessun articolo trovato per i criteri di ricerca selezionati.
            </NoResults>
          )}
        </PostsGrid>
      </BlogContainer>
    </Layout>
  );
};

export default BlogPage;
