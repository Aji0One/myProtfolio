import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroImg2 from "../Components/HeroImg2/HeroImg2";
import SkillsContainer from "../Components/Skills/skills";

const Skills = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Skills" text="My Tech Skills" />
      <SkillsContainer />
      <Footer />
    </div>
  );
};

export default Skills;
