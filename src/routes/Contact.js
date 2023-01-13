import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import HeroImg2 from '../Components/HeroImg2/HeroImg2';
import Form from '../Components/Form/Form';
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT." text="Lets have a chat" />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
