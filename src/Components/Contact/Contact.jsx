import React,{useState} from 'react'
import './Contact.css'
import {assets} from '../../assets/assets';
const Contact = () => {
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
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
       
      <div className="contact-section">
      <div className="contact-left">
      <h1>Let's Talk</h1>
      <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on.You can contact anytime.</p>
      <div className="contact-details">
        <div className="contact-detail">
        <img src={assets.mail_icon} alt="" /><p>pawan.sangare05@gmail.com</p>
        </div>
        <div className="contact-detail">
          <img src={assets.call_icon} alt="" /><p>+91 9424575042</p>
        </div>
        <div className="contact-detail">
          <img src={assets.location_icon} alt="" /><p>19/10 pardesipura ,Indore</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5066646239234!2d75.86650127387898!3d22.746570979368137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd00752eae37%3A0xd99be4e59715c0ae!2spawan%20sangare!5e0!3m2!1sen!2sin!4v1717240061770!5m2!1sen!2sin" style={{"border":"0","width":"700","height":"450","borderRadius":"10px"}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
      <form onSubmit={onSubmit} className='contact-right'>
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter Your Name' name='name' />
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder='Enter Your Email' name='email' />
        <label htmlFor="">Write Your Message Here..</label>
        <textarea name="message" rows='6' id="" placeholder='Enter your Message'></textarea>
        <button className='contact-submit' type='submit'>Submit Now</button>
        <span style={{"color":"white"}}>{result} </span>
      </form>
      
      </div>
    </div>
  )
}

export default Contact