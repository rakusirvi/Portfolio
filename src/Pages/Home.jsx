import React, { useEffect } from "react";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import ProjectSection from "../Components/ProjectSection";
import Achievements from "../Components/Achievements";
import ToolAndTech from "../Components/ToolAndTech";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <Achievements />
      <ToolAndTech />
    </>
  );
};

export default Home;
