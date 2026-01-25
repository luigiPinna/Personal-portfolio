import React from 'react';
import { motion } from 'framer-motion';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { HeroContainer, LeftSection, RightSection, ProfileImage, HeroEffects, CodeLines } from './HeroStyles';
import { AiOutlineMessage } from "react-icons/ai";

const Hero = (props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Section nopadding style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <HeroContainer>
        <LeftSection>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <SectionTitle main className="gradient-text" style={{ textAlign: 'left' }}>
                Hi, I'm Luigi
              </SectionTitle>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SectionText className="text-xl md:text-2xl font-semibold mb-6" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                Software Engineer
              </SectionText>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SectionText style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
                I'm a Software Engineer who enjoys building web and software applications and integrating AI into real-world products.
                <br /><br />
                I mainly work with FastAPI, React, and OpenAI, focusing on scalable and well-structured solutions.
                <br />
                I like keeping things simple, pragmatic, and aligned with actual business goals.
              </SectionText>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a href="mailto:luigipinna3@gmail.com" style={{ textDecoration: 'none' }}>
                <Button>
                  Contact me <AiOutlineMessage size={20} style={{ marginLeft: '8px' }} />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </LeftSection>

        <RightSection>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProfileImage src="/images/hero_img.png" alt="Luigi Pinna" />
          </motion.div>
        </RightSection>
      </HeroContainer>
    </Section>
  );
};

export default Hero;