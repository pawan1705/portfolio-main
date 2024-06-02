import React from 'react'
import './Follow.css'
import {assets} from '../../assets/assets'
const Follow = () => {
  return (
    <div className='follow'>
      
      <ul>
        <li><a href="https://api.whatsapp.com/send?phone=919424575042"><img src={assets.wb} alt="" /></a></li>
        <li><a href="https://www.instagram.com/pawan_sangare_/"><img src={assets.insta} alt="" /></a></li>
        <li><a href="https://www.linkedin.com/in/pawan-sangare/"><img src={assets.lin} alt="" /></a></li>
        {/* <li><a href=""><img src={assets.snap} alt="" /></a></li> */}
        <li><a href="https://github.com/pawan1705"><img src={assets.gh} alt="" /></a></li>
        <li><a href="https://t.me/9424575042"><img src={assets.tele} alt="" /></a></li>
      </ul>
      
    </div>
  )
}

export default Follow