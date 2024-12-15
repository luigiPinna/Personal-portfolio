import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container id="header">
    <Div1>
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <DiCssdeck size="3rem" /> <span>LP</span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects" as={Link}>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink href="#tech" as={Link}>
          Technologies
        </NavLink>
      </li>
      <li>
        <NavLink href="#about" as={Link}>
          About
        </NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/luigiPinna">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/luigi-pinna-7a651656/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/reallurby/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
