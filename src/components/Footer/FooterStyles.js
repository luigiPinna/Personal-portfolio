import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 3rem 48px 40px;
  margin: 4rem auto 1rem;
  box-sizing: content-box;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 2rem 16px 48px;
    width: calc(100vw - 32px);
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
  margin-bottom: 3rem;
  border-radius: 2px;

  @media ${props => props.theme.breakpoints.sm} {
    margin-bottom: 2rem;
  }
`
export const LinkItem = styled.a`
  font-size: 1.6rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 16px;
  transition: all 0.3s ease;
  position: relative;
  left: 0;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.accent1};
    left: 6px;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.4rem;
    display: flex;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
`
export const SocialIconsContainer = styled.div`
max-width: 1040px;
display: flex;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
  width: 100%;
  flex-direction: column;
}
`

export const CompanyContainer = styled.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`


export const Slogan = styled.p`
  color: ${props => props.theme.colors.primary1};
  min-width: 280px;
  letter-spacing: 0.5px;
  font-size: 1.8rem;
  line-height: 1.6;
  padding: 1rem;
  font-style: italic;
  font-weight: 600;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 1.6rem;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 1.4rem;
    min-width: auto;
  }
`

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`


export const LinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;
  padding: 0 0 2rem;
  list-style: none;

  @media ${props => props.theme.breakpoints.lg} {
    padding: 0 0 2rem;
  }

  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
    padding: 0 0 2rem;
    gap: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 0 0 2rem;
    gap: 1rem;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`;

export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.5;
  text-transform: uppercase;
  color: ${props => props.theme.colors.accent1};
  margin-bottom: 16px;
  letter-spacing: 1px;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1rem;
    margin-bottom: 8px;
  }
`;

export const BackToTopButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${props => props.theme.colors.background2};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  color: ${props => props.theme.colors.primary1};
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: ${props => props.theme.colors.accent1};
    color: white;
    border-color: ${props => props.theme.colors.accent1};
    box-shadow: 0 4px 12px ${props => props.theme.colors.shadow};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
    margin-top: 1rem;
  }
`
