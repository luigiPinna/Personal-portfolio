import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  MobileIcon,
  NavMenu,
  NavItem,
  NavbarBackdrop,
  CloseButton,
  NavLinkWrapper,
} from "./HeaderStyles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  // Gestisce lo scroll per cambiare lo stile dell'header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Chiude il menu quando si clicca su un link
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Funzione per gestire la navigazione a sezioni nella home o reindirizzare alla home
  const handleNavigation = (e, href) => {
    e.preventDefault();
    closeMenu();

    if (isHomePage) {
      // Se siamo già nella home, scorriamo alla sezione
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Se siamo in un'altra pagina, navighiamo alla home con l'ancora
      router.push(`/${href}`);
    }
  };

  // Impedisce lo scroll quando il menu mobile è aperto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <Container id="header" scrolled={scrolled}>
      <Div1>
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", color: "white" }}
        >
          <DiCssdeck size="3rem" /> <span>LP</span>
        </Link>
      </Div1>

      {/* Menu per desktop */}
      <Div2>
        <NavItem>
          <NavLinkWrapper>
            <NavLink
              href="#projects"
              onClick={(e) => handleNavigation(e, "#projects")}
            >
              Projects
            </NavLink>
          </NavLinkWrapper>
        </NavItem>
        <NavItem>
          <NavLinkWrapper>
            <NavLink href="#tech" onClick={(e) => handleNavigation(e, "#tech")}>
              Technologies
            </NavLink>
          </NavLinkWrapper>
        </NavItem>
        <NavItem>
          <NavLinkWrapper>
            <NavLink
              href="#skillsRadar"
              onClick={(e) => handleNavigation(e, "#skillsRadar")}
            >
              Skills
            </NavLink>
          </NavLinkWrapper>
        </NavItem>
        <NavItem>
          <NavLinkWrapper>
            <NavLink
              href="#journey"
              onClick={(e) => handleNavigation(e, "#journey")}
            >
              Journey
            </NavLink>
          </NavLinkWrapper>
        </NavItem>
        <NavItem>
          <NavLinkWrapper>
            <NavLink href="/blog" as={Link} onClick={closeMenu}>
              Blog
            </NavLink>
          </NavLinkWrapper>
        </NavItem>
        <NavItem>
          <NavLinkWrapper>
            <NavLink href="#about" onClick={(e) => handleNavigation(e, "#about")}>
              About
            </NavLink>
          </NavLinkWrapper>
        </NavItem>
      </Div2>

      <Div3>
        <SocialIcons href="https://github.com/luigiPinna" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/luigi-pinna-7a651656/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/reallurby/" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <ThemeToggle />
        {/* Icona del menu mobile */}
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <AiOutlineClose size="2.4rem" />
          ) : (
            <AiOutlineMenu size="2.4rem" />
          )}
        </MobileIcon>
      </Div3>

      {/* Menu mobile */}
      <NavMenu isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeMenu}>
          <AiOutlineClose size="2.4rem" />
        </CloseButton>
        <NavItem>
          <NavLink
            href="#projects"
            onClick={(e) => handleNavigation(e, "#projects")}
          >
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#tech" onClick={(e) => handleNavigation(e, "#tech")}>
            Technologies
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#skillsRadar"
            onClick={(e) => handleNavigation(e, "#skillsRadar")}
          >
            Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#journey"
            onClick={(e) => handleNavigation(e, "#journey")}
          >
            Journey
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/blog" as={Link} onClick={closeMenu}>
            Blog
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about" onClick={(e) => handleNavigation(e, "#about")}>
            About
          </NavLink>
        </NavItem>
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <SocialIcons href="https://github.com/luigiPinna" onClick={closeMenu}>
            <AiFillGithub size="2.4rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/luigi-pinna-7a651656/"
            onClick={closeMenu}
          >
            <AiFillLinkedin size="2.4rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.instagram.com/reallurby/"
            onClick={closeMenu}
          >
            <AiFillInstagram size="2.4rem" />
          </SocialIcons>
        </div>
      </NavMenu>

      {/* Backdrop solo quando il menu è aperto */}
      {isOpen && <NavbarBackdrop onClick={closeMenu} />}
    </Container>
  );
};

export default Header;
