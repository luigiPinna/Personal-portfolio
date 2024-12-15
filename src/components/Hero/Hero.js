import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, PersonalPhoto } from './HeroStyles';
import {AiOutlineMessage} from "react-icons/ai";

const Hero = (props) => (

    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         Hi, I'm Luigi<br />

        </SectionTitle>
        <SectionText>
          Full Stack Developer
        </SectionText>
          <PersonalPhoto />
        <SectionText>

            I am a developer based in Italy,
            I have a diploma in computer science and a bachelor's degree in business.
            I have experience in programming, accounting, and marketing.
        </SectionText>
          <Button onClick={props.handleClick}>
              <a href="mailto:luigipinna3@gmail.com">Contact me  </a>
              <AiOutlineMessage style={{ display: 'flex', alignItems: 'center', color:"white", marginLeft:"8px" }}/>
          </Button>
      </LeftSection>
    </Section>

);

export default Hero;