import './FooterStyle.css';

import React from 'react'
import { FaHome, FaMailBulk, FaPhone, FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "#fff",
                    marginRight: "2rem"}} />
                    <div>
                        <p>Bagayam, Vellore</p>
                        <p>India</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: "#fff",
                    marginRight: "2rem"}} />
                    91-86106 64367</h4>
                </div>
                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff",
                        marginRight: "2rem"}} />
                        ajithkumarmspva@gmail.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>This is me Ajith Kumar.</p>
                <p>Fresher. Applying for the post of </p>
                <p>Full Stack Developer.</p>
                <div className='social'>
                    <FaLinkedin size={20} style={{color: "#fff",
                        marginRight: "1rem"}} />
                    <FaFacebookF size={20} style={{color: "#fff",
                        marginRight: "1rem"}} />
                    <FaInstagram size={20} style={{color: "#fff",
                        marginRight: "1rem"}} />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
