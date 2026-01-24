import React from "react";
import { motion } from "framer-motion";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ImageWrapper,
  CardContent,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { ScrollReveal } from "../../animations/ScrollAnimations";
import { staggerContainer, fadeInUp } from "../../animations/variants";

const Projects = () => {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <ScrollReveal variants={fadeInUp}>
        <SectionTitle main className="gradient-text">
          Projects
        </SectionTitle>
      </ScrollReveal>

      <ScrollReveal variants={staggerContainer}>
        <GridContainer>
          {projects
            .sort((a, b) => b.id - a.id)
            .map((p, i) => {
              return (
                <motion.div
                  key={p.id}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <BlogCard className="glass-dark dark:glass-dark">
                    <ImageWrapper>
                      <Img src={p.image} alt={p.title} />
                      <div className="overlay" />
                    </ImageWrapper>

                    <CardContent>
                      <TitleContent>
                        <HeaderThree className="gradient-text">
                          {p.title}
                        </HeaderThree>
                      </TitleContent>

                      <CardInfo className="card-info">{p.description}</CardInfo>

                      <div>
                        <TitleContent>
                          <b style={{ color: 'inherit', fontSize: '1.4rem' }}>Stack</b>
                        </TitleContent>
                        <TagList>
                          {p.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                          ))}
                        </TagList>
                      </div>

                      <UtilityList>
                        {p.visit && (
                          <ExternalLinks href={p.visit} target="_blank" rel="noopener noreferrer">
                            Visit
                          </ExternalLinks>
                        )}
                        {p.source && (
                          <ExternalLinks href={p.source} target="_blank" rel="noopener noreferrer">
                            Source
                          </ExternalLinks>
                        )}
                      </UtilityList>
                    </CardContent>
                  </BlogCard>
                </motion.div>
              );
            })}
        </GridContainer>
      </ScrollReveal>
    </Section>
  );
};

export default Projects;
