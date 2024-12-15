import React from 'react';
import {
  AiOutlineToTop,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

import { SocialIcons} from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import Link from "next/link";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:340-68-52-842">+39 340 68 52 842</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:luigipinna3@gmail.com">
            luigipinna3@gmail.com
          </LinkItem>
        </LinkColumn>

      </LinkList>
      <SocialIconsContainer>

        <CompanyContainer>
          <Slogan>"Be the best wherever you are" </Slogan>
        </CompanyContainer>

        <SocialContainer>

          <SocialIcons href="https://github.com/luigiPinna">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/luigi-pinna-7a651656/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/reallurby/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>

          <SocialContainer style={{display: 'flex'}}>
            <SocialIcons href="#header" style={{display: 'flex', alignItems: 'center'}}>
              Back to Top <AiOutlineToTop size="3rem" />
            </SocialIcons>
          </SocialContainer>

      </SocialIconsContainer>



    </FooterWrapper>
  );
};

export default Footer;
