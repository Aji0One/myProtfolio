import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import HeroImg2 from '../Components/HeroImg2/HeroImg2';
// import PricingCard from '../Components/PricingCard/PricingCard';
import Work from '../Components/Work/Work';
const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading='PROJECTS.' text="Some of my project works" />
      <Work/>
      {/* <PricingCard/> */}
      <Footer/>
    </div>
  )
}

export default Project
