import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Title from '../Title/Title';
import About from '../About/About';
import Service from '../Service/Service'
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Follow from '../Follow/Follow';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Title title="My Service"/>
      <Service/>
      <Title title="My Latest Work"/>
      <Work/>
      <Title title="Get In Touch"/>
      <Contact/>
      <Title title="Follow  Me On"/>
      <Follow/>
       <Footer/>
    </div>
  )
}

export default Home