import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import HeroImg from "../Components/HeroImg/HeroImg";
import Footer from "../Components/Footer/Footer";
import Work from "../Components/Work/Work";
import Resume from "../Components/Resume/resume";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <Resume />
      <Footer />
    </div>
  );
};

export default Home;
