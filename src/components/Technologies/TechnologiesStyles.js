import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.2;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.primary1};
  margin-bottom: 1rem;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 2rem;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 1.8rem;
  }
`;

export const ListParagraph = styled.p`
  font-size: 1.6rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};

  @media ${props => props.theme.breakpoints.md}{
    font-size: 1.4rem;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 1.3rem;
    line-height: 1.6;
  }
`

export const ListItem = styled.li`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 16px;
  background: ${props => props.theme.colors.background2};
  border: 1px solid ${props => props.theme.colors.border};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: ${props => props.theme.colors.accent1};
    box-shadow: 0 20px 60px ${props => props.theme.colors.shadow};
  }

  @media ${props => props.theme.breakpoints.md}{
    max-width: 100%;
    padding: 1.5rem;
  }

  @media ${props => props.theme.breakpoints.sm}{
    margin-bottom: 1.5rem;
    max-width: 100%;
    flex-direction: column;
  }
`;

export const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  color: white;
  transition: all 0.3s ease;

  ${ListItem}:hover & {
    transform: scale(1.1) rotate(5deg);
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
  }
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
