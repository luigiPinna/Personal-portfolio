import React from 'react';
import { motion } from 'framer-motion';
import {
  AiOutlineToTop,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  Divider,
  BackToTopButton,
} from './FooterStyles';
import { ScrollReveal } from '../../animations/ScrollAnimations';
import { fadeInUp } from '../../animations/variants';

const Footer = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterWrapper>
      <Divider />
      <ScrollReveal variants={fadeInUp}>
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
      </ScrollReveal>

      <ScrollReveal variants={fadeInUp}>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan className="gradient-text">"Be the best wherever you are"</Slogan>
          </CompanyContainer>

          <SocialContainer>
            <SocialIcons href="https://github.com/luigiPinna" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/luigi-pinna-7a651656/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/reallurby/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </SocialContainer>

          <SocialContainer>
            <BackToTopButton
              onClick={handleScrollToTop}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Top <AiOutlineToTop size="2.4rem" style={{ marginLeft: '0.5rem' }} />
            </BackToTopButton>
          </SocialContainer>
        </SocialIconsContainer>
      </ScrollReveal>
    </FooterWrapper>
  );
};

export default Footer;
