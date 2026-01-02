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
      I’m a Software Engineer who enjoys building web and software applications and integrating AI into real-world products.

      I mainly work with FastAPI, React, and OpenAI, focusing on scalable and well-structured solutions. <br />
      I like keeping things simple, pragmatic, and aligned with actual business goals. <br />
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