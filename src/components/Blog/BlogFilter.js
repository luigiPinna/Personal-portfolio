import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  margin-bottom: 4rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem;
    margin-bottom: 3rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent}40;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0.8rem;
  }
`;

const CategoryButton = styled.button`
  padding: 0.8rem 1.6rem;
  font-size: 1.4rem;
  border: none;
  border-radius: 2rem;
  background: ${({ theme, active }) =>
    active ? theme.colors.accent : "transparent"};
  color: ${({ theme, active }) =>
    active ? theme.colors.background : "rgba(255, 255, 255, 0.7)"};
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid
    ${({ theme, active }) =>
      active ? theme.colors.accent : "rgba(255, 255, 255, 0.2)"};

  &:hover {
    background: ${({ theme, active }) =>
      active ? theme.colors.accent : "rgba(255, 255, 255, 0.1)"};
    color: ${({ theme, active }) =>
      active ? theme.colors.background : "rgba(255, 255, 255, 0.9)"};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.6rem 1.2rem;
    font-size: 1.2rem;
  }
`;

const BlogFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <FilterContainer>
      <SearchInput
        type="text"
        placeholder="Cerca articoli..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <CategoryContainer>
        <CategoryButton
          active={!selectedCategory}
          onClick={() => onCategoryChange(null)}
        >
          Tutti
        </CategoryButton>
        {categories.map((category) => (
          <CategoryButton
            key={category}
            active={selectedCategory === category}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryContainer>
    </FilterContainer>
  );
};

export default BlogFilter;
