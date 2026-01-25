import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  padding: 3rem;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    padding: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;

export const BlogCard = styled.div`
  border-radius: 16px;
  background: ${(props) => props.theme.colors.background2};
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 550px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    cursor: pointer;
    border-color: ${(props) => props.theme.colors.accent1};
    box-shadow: 0 20px 60px ${(props) => props.theme.colors.shadow};

    .overlay {
      opacity: 1;
    }

    img {
      transform: scale(1.1);
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 500px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, ${(props) => props.theme.colors.background2}, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const TitleContent = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.primary1};
  font-size: 2rem;
  margin: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.8rem;
  }
`;

export const CardInfo = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1.4rem;
  line-height: 1.7;
  text-align: left;
  flex: 1;
  margin-bottom: 1.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1rem;
`;

export const ExternalLinks = styled.a`
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.4rem;
  padding: 0.8rem 1.5rem;
  background: ${(props) => props.theme.colors.background3};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  transition: all 0.3s ease;
  flex: 1;
  text-align: center;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    background: ${(props) => props.theme.colors.accent1};
    color: white;
    border-color: ${(props) => props.theme.colors.accent1};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.5rem 0;
  list-style: none;
  margin-bottom: 1rem;
`;

export const Tag = styled.li`
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.2rem;
  padding: 0.4rem 1rem;
  background: ${(props) => props.theme.colors.background3};
  border: 1px solid ${(props) => props.theme.colors.accent2 + '30'};
  border-radius: 20px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.accent2 + '20'};
    border-color: ${(props) => props.theme.colors.accent2};
  }
`;
