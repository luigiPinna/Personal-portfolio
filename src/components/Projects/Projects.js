import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects
        .sort((a, b) => b.id - a.id)
        .map((p, i) => {
          return (
            <BlogCard key={p.id}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>
                  <b>Stack</b>
                </TitleContent>
                <TagList>
                  {p.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                {!p.visit ? (
                  ""
                ) : (
                  <ExternalLinks href={p.visit}>Visit</ExternalLinks>
                )}
                {!p.source ? (
                  ""
                ) : (
                  <ExternalLinks href={p.source}>Source</ExternalLinks>
                )}
              </UtilityList>
            </BlogCard>
          );
        })}
    </GridContainer>
  </Section>
);

export default Projects;
