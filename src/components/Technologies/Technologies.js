import React from 'react';
import { motion } from 'framer-motion';
import { DiAngularSimple, DiBootstrap, DiDatabase } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, IconWrapper } from './TechnologiesStyles';
import { ScrollReveal } from '../../animations/ScrollAnimations';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const Technologies = () => {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <Section id="tech">
      <SectionDivider divider />
      <ScrollReveal variants={fadeInUp}>
        <SectionTitle className="gradient-text">Technologies</SectionTitle>
      </ScrollReveal>
      <ScrollReveal variants={fadeInUp}>
        <SectionText>
          Specialized in building scalable applications with cutting-edge
          technologies, focusing on backend systems, AI integration, and modern web
          frameworks.
        </SectionText>
      </ScrollReveal>
      <ScrollReveal variants={staggerContainer}>
        <List>
          <motion.div variants={cardVariants}>
            <ListItem className="glass-dark dark:glass-dark">
              <IconWrapper>
                <DiDatabase size="3.5rem" />
              </IconWrapper>
              <ListContainer>
                <ListTitle className="gradient-text">Back-End</ListTitle>
                <ListParagraph>
                  Core expertise in <br />
                  Python (FastAPI, Flask, Django) <br />
                  Java (Spring Boot) <br />
                  PostgreSQL, Oracle <br />
                  OpenAI & Azure AI integration <br />
                  Data processing (Pandas, NumPy)
                </ListParagraph>
              </ListContainer>
            </ListItem>
          </motion.div>

          <motion.div variants={cardVariants}>
            <ListItem className="glass-dark dark:glass-dark">
              <IconWrapper>
                <DiAngularSimple size="3.5rem" />
              </IconWrapper>
              <ListContainer>
                <ListTitle className="gradient-text">Front-End</ListTitle>
                <ListParagraph>
                  Experience with <br />
                  React <br />
                  Angular <br />
                  TypeScript <br />
                  Tailwind CSS <br />
                  RESTful API integration
                </ListParagraph>
              </ListContainer>
            </ListItem>
          </motion.div>

          <motion.div variants={cardVariants}>
            <ListItem className="glass-dark dark:glass-dark">
              <IconWrapper>
                <DiBootstrap size="3.5rem" />
              </IconWrapper>
              <ListContainer>
                <ListTitle className="gradient-text">Development Tools</ListTitle>
                <ListParagraph>
                  Proficient with <br />
                  Git/GitHub <br />
                  Azure <br />
                  Postman <br />
                  SQL Data Modeling
                </ListParagraph>
              </ListContainer>
            </ListItem>
          </motion.div>
        </List>
      </ScrollReveal>
    </Section>
  );
};

export default Technologies;
