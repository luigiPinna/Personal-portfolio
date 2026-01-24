
import styled from 'styled-components'

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  background: ${props => props.theme.colors.background2};
  border: 1px solid ${props => props.theme.colors.border};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  list-style: none;
  display: flex;
  justify-content: space-between;

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;
   &::-webkit-scrollbar {
     display: none;
   }

  @media ${props => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
    padding: 1.5rem;
  }
`
export const CarouselMobileScrollNode = styled.div`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => final ? `120%;` : `min-content`}
  }
`

export const CarouselItem = styled.div`
  background: transparent;
  border-radius: 8px;
  max-width: 196px;
  padding: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.background3};
  }

  @media ${props => props.theme.breakpoints.md} {
    max-width: 124px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    min-height: 70px;
    background: ${props => props.theme.colors.background2};
    padding: 8px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 8px;
    overflow: visible;
    position: relative;
    height: fit-content;

    ${(props) => props.active === props.index ? `opacity: 1; border: 1px solid ${props.theme.colors.accent1};` : `opacity: 0.5; border: 1px solid ${props.theme.colors.border};`};
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 2.6rem;
  line-height: 1.2;
  letter-spacing: 0.5px;
  display: flex;
  background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
  }
`
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`

export const CarouselItemText = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  letter-spacing: 0.02em;
  color: ${props => props.theme.colors.textSecondary};
  padding-right: 16px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.2rem;
    padding-right: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1rem;
    line-height: 1.5;
    padding-right: 0;
  }
`
export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
  
`

export const CarouselButtonDot = styled.div`
  background: ${(props) => props.active ? 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)' : props.theme.colors.textSecondary};
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
  transition: all 0.3s ease;
`

