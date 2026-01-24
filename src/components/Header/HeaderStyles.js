import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const CloseButton = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1000;
  background-color: ${(props) =>
    props.scrolled
      ? props.theme.colors.background1 + "e6"
      : props.theme.colors.background1 + "80"};
  backdrop-filter: blur(16px);
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  transition: all 0.3s ease;
  height: 70px;
  box-shadow: ${(props) =>
    props.scrolled ? "0 8px 32px rgba(0, 0, 0, 0.1)" : "none"};

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    height: 60px;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  padding-left: 15px;
  font-family: sans-serif;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 1 / 2;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 5;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none; /* Nasconde la navigazione su mobile */
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 2 / 1 / 3;
    justify-content: flex-end;
  }
`;

export const NavLinkWrapper = styled.div`
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const NavLink = styled.a`
  font-size: 1.6rem;
  line-height: 32px;
  color: ${(props) => props.theme.colors.primary1};
  transition: 0.3s ease;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: ${(props) => props.theme.colors.accent1};
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0.5rem;
    font-size: 1.4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
    font-size: 2rem;
    display: block;
    text-align: center;
  }
`;

export const NavItem = styled.li`
  list-style: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

// Icona del menu mobile
export const MobileIcon = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem;
    margin-left: 1rem;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.3s ease;

    &:hover {
      color: #fff;
      transform: scale(1.1);
    }
  }
`;

// Sfondo per il menu mobile
export const NavbarBackdrop = styled.div`
  position: fixed;
  top: 60px; /* Stessa altezza dell'header mobile */
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

// Menu mobile
export const NavMenu = styled.ul`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.colors.background1};
    backdrop-filter: blur(16px);
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    padding: 6rem 1.5rem 2rem;
    overflow-y: auto;
    transition: all 0.3s ease;
    z-index: 1000;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    animation: ${({ isOpen }) => (isOpen ? 'slideDown 0.3s ease' : 'none')};

    @keyframes slideDown {
      from { transform: translateY(-100%); }
      to { transform: translateY(0); }
    }
  }
`;

// Social Icons
export const SocialIcons = styled.a`
  transition: all 0.3s ease;
  color: ${(props) => props.theme.colors.primary1};
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
    color: white;
    transform: scale(1.1);
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 6px;
  }
`;

// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;
