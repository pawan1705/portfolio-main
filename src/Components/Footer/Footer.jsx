import React from 'react'
import {assets} from '../../assets/assets'
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
      <div className="footer-top-left">
        {/* <img src={assets.name} alt="" /> */}
        <h1 >PAWAN KUMAR SANGARE</h1>
        <p>I am a frontend developer with the Experience of some Internship.</p>
      </div>
      <div className="footer-top-right">
        <div className="footer-email-input">
        
          <img src={assets.user_icon} alt="" />
          <input type="email" placeholder='Enter your email' />
        </div>
        <div className="footer-subscribe">
        Subscribe
        </div>
      </div>
      </div>
      <hr />
      <div className="footer-bottom">
      <p className="footer-bottom-left">
        @2024 Pawan Sangare , All Rights Reserved.
      </p>
      <div className="footer-bottom-right">
        <p>Term of Service</p>
        <p>Privacy Policy</p>
        <p>Connect With Me</p>
      </div>
      </div>  
    </div>
  )
}

export default Footer