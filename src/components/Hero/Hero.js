import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, PersonalPhoto } from './HeroStyles';
import {AiOutlineMessage} from "react-icons/ai";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Luigi
      </SectionTitle>

      <SectionText>Software Engineer</SectionText>

      <PersonalPhoto />

      <SectionText>
        Software Engineer specializing in efficient, scalable solutions with a
        focus on AI integration. I engineer next-generation
        applications using FastAPI, React, and OpenAI, combining technical
        expertise with business insight to deliver high-impact results
      </SectionText>
      <Button onClick={props.handleClick}>
        <a href="mailto:luigipinna3@gmail.com">Contact me </a>
        <AiOutlineMessage
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginLeft: "8px",
          }}
        />
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;