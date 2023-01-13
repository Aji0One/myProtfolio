import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import HeroImg2 from '../Components/HeroImg2/HeroImg2';
import AboutContent from '../Components/AboutContent/AboutContent'; 
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT." text="Im a friendly Full Stack Developer" />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
