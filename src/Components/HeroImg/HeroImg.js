import './HeroImgStyle.css';

import React from 'react';
import IntroImg from '../../assets/Intro-img.jpg';
import { Link } from 'react-router-dom';
const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='Intro-Img' src={IntroImg} alt='IntroImg'></img>
        </div>
        <div className='content'>
            <h1>Full Stack Developer.</h1>
            <div>
                <Link to='/project' className='btn'>Project</Link>
                <Link to='/contact' className="btn btn-light">Contact</Link>
            </div>

        </div>
    </div>
  )
}

export default HeroImg
