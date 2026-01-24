import React from 'react';
import { motion } from 'framer-motion';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, ProfileImage, ButtonWrapper } from './HeroStyles';
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
    <Section row nopadding>
      <LeftSection>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <SectionTitle main center className="gradient-text">
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
            <ButtonWrapper>
              <Button onClick={props.handleClick} className="group relative overflow-hidden">
                <a href="mailto:luigipinna3@gmail.com" className="flex items-center">
                  <span className="relative z-10">Contact me</span>
                  <AiOutlineMessage
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                      marginLeft: "8px",
                    }}
                    className="relative z-10"
                  />
                </a>
                <span className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </ButtonWrapper>
          </motion.div>
        </motion.div>
      </LeftSection>

      <RightSection>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="animate-float"
        >
          <ProfileImage
            src="/images/me3.png"
            alt="Luigi Pinna"
          />
        </motion.div>
      </RightSection>
    </Section>
  );
};

export default Hero;