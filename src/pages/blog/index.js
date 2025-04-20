import React, { useState, useMemo } from 'react';
import { Layout } from '../../layout/Layout';
import FeaturedPost from '../../components/Blog/FeaturedPost';
import PostCard from '../../components/Blog/PostCard';
import BlogFilter from '../../components/Blog/BlogFilter';
import blogData from '../../data/blogPosts.json';
import styled from 'styled-components';

const BlogContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding: 8rem 2rem;
`;

const BlogTitle = styled.h1`
  font-size: 4.8rem;
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Space Grotesk', sans-serif;
  color: ${({ theme }) => theme.colors.text};
`;

const BlogSubtitle = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 6rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  gap: 4rem;
  max-width: 140rem;
  margin: 0 auto;
`;

const NoResults = styled.p`
  text-align: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  grid-column: 1 / -1;
`;

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Estrai le categorie uniche dai post
  const categories = useMemo(() => {
    const allPosts = [blogData.featuredPost, ...blogData.posts];
    return [...new Set(allPosts.map(post => post.category))];
  }, []);

  // Filtra i post in base alla ricerca e alla categoria
  const filteredPosts = useMemo(() => {
    return blogData.posts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

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

        <FeaturedPost post={blogData.featuredPost} />

        <PostsGrid>
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <NoResults>Nessun articolo trovato per i criteri di ricerca selezionati.</NoResults>
          )}
        </PostsGrid>
      </BlogContainer>
    </Layout>
  );
};

export default BlogPage; 