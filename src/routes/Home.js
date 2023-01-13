import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import HeroImg from '../Components/HeroImg/HeroImg';
import Footer from '../Components/Footer/Footer';
import Work from '../Components/Work/Work';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home
