// import React from 'react'
// import Home from './Components/Home/Home'
// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Service from './Components/Service/Service'
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Follow from './Components/Follow/Follow';
const App = () => {
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
      <Title title="Follow  Me"/>
      <Follow/>
       <Footer/>
    </div>
  )
}

export default App