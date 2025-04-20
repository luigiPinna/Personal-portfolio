import styled from "styled-components";

export const BlogContainer = styled.div`
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

export const BlogTitle = styled.h1`
  font-size: 4.8rem;
  color: ${(props) => props.theme.colors.primary1};
  text-align: center;
  margin-bottom: 8rem;
  font-family: ${(props) => props.theme.fonts.title};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 3.8rem;
    margin-bottom: 6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3rem;
    margin-bottom: 4rem;
  }
`;

export const FeaturedPost = styled.article`
  max-width: 120rem;
  margin: 0 auto 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 4rem;
    margin-bottom: 8rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 3rem;
    margin-bottom: 6rem;
  }
`;

export const FeaturedImage = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 40rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 30rem;
  }

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

export const PostTitle = styled.h2`
  font-size: 3.2rem;
  color: ${(props) => props.theme.colors.primary1};
  margin-bottom: 2rem;
  font-family: ${(props) => props.theme.fonts.title};
  line-height: 1.2;
  font-weight: 700;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2.8rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
  }
`;

export const PostExcerpt = styled.p`
  color: ${(props) => props.theme.colors.primary2};
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  font-weight: 400;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary2};
  font-size: 1.4rem;
  margin-bottom: 2rem;
  font-weight: 400;

  span {
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    flex-wrap: wrap;

    span {
      margin-bottom: 0.5rem;
    }
  }
`;

export const ReadMore = styled.a`
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.6rem;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease;
  font-weight: 500;

  &:hover {
    color: ${(props) => props.theme.colors.primary2};
  }

  svg {
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

export const PostsGrid = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 4rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 3rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

export const PostCard = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  overflow: hidden;
  margin-bottom: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 25rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.primary1};
  margin-bottom: 1.5rem;
  font-family: ${(props) => props.theme.fonts.title};
  line-height: 1.2;
  font-weight: 700;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }
`;
