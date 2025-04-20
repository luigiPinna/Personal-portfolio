import styled from 'styled-components';

export const BlogContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background1};
  padding: 12rem 2rem 8rem;
`;

export const BlogTitle = styled.h1`
  font-size: 4.8rem;
  color: ${props => props.theme.colors.primary1};
  text-align: center;
  margin-bottom: 8rem;
  font-family: ${props => props.theme.fonts.title};
`;

export const FeaturedPost = styled.article`
  max-width: 120rem;
  margin: 0 auto 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const FeaturedImage = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FeaturedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Category = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.primary1};
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 2rem;
  font-weight: 500;
`;

export const PostTitle = styled.h2`
  font-size: 3.2rem;
  color: ${props => props.theme.colors.primary1};
  margin-bottom: 2rem;
  font-family: ${props => props.theme.fonts.title};
  line-height: 1.2;
  font-weight: 700;
`;

export const PostExcerpt = styled.p`
  color: ${props => props.theme.colors.primary2};
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  font-weight: 400;
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.primary2};
  font-size: 1.4rem;
  margin-bottom: 2rem;
  font-weight: 400;

  span {
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`;

export const ReadMore = styled.a`
  color: ${props => props.theme.colors.primary1};
  font-size: 1.6rem;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease;
  font-weight: 500;

  &:hover {
    color: ${props => props.theme.colors.primary2};
  }

  svg {
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
  }
`;

export const PostsGrid = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 4rem;
`;

export const PostCard = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  overflow: hidden;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 2.4rem;
  color: ${props => props.theme.colors.primary1};
  margin-bottom: 1.5rem;
  font-family: ${props => props.theme.fonts.title};
  line-height: 1.2;
  font-weight: 700;
`; 