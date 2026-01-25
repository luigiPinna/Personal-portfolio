"use client";

import Acomplishments from "../components/Acomplishments/Acomplishments";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import SkillsRadar from "../components/SkillsRadar/SkillsRadar";
import ProfessionalJourney from "../components/ProfessionalJourney/ProfessionalJourney";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Technologies />
      <ProfessionalJourney />
      <SkillsRadar />

      {/*<AIProjects />
       */}
      <Timeline />
      {/*<Acomplishments />*/}
    </Layout>
  );
};

export default Home;
