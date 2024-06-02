import React from 'react'
import {assets} from '../../assets/assets'
import './Footer.css';
const Footer = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "704da6c1-db80-4893-bfff-25190a589374");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Subscribed");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='footer'>
      <div className="footer-top">
      <div className="footer-top-left">
        {/* <img src={assets.name} alt="" /> */}
        <h1 >PAWAN KUMAR SANGARE</h1>
        <p>I am a frontend developer with the Experience of some Internship.</p>
      </div>
      <div className="footer-top-right">
      <form onSubmit={onSubmit} className='contact-right'>
        <div className="footer-email-input">
          <img src={assets.user_icon} alt="" />
          <input type="email" placeholder='Enter your email' required />
        </div>
        {/* <div className="footer-subscribe" type='submit'>
        Subscribe
        </div> */}
        <button className="footer-subscribe" type='submit'>Subscribe</button>
        <span style={{"color":"white"}}>{result} </span>
        </form>
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