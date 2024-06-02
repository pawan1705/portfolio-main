import React from 'react'
import {assets } from '../../assets/assets'
import {Link} from 'react-scroll';
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={assets.profile} alt="" />
      <h1><span>I'm Pawan Kumar Sangare ,</span>  Frontend developer based in India.</h1>
      <p>I am a frontend developer with the Experience of some Internship.</p>
      <div className='hero-action'>
        <div className="hero-connect">
        <Link to='contact' smooth={true} offset={-150} duration={900}>Connect With Me</Link>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero