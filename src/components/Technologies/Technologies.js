import React from 'react';
import {DiAngularSimple, DiBootstrap,DiDatabase,} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Specialized in building scalable applications with cutting-edge
      technologies, focusing on backend systems, AI integration, and modern web
      frameworks.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
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
      <ListItem>
        <picture>
          <DiAngularSimple size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
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
      <ListItem>
        <picture>
          <DiBootstrap size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Development Tools</ListTitle>
          <ListParagraph>
            Proficient with <br />
            Git/GitHub <br />
            Azure <br />
            Postman <br />
            SQL Data Modeling
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
