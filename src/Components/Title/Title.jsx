import React from 'react'
import './Title.css'
import {assets} from '../../assets/assets';
const Title = ({title}) => {
  return (
    <div className='title'>
      <div className="about-title1">
        <h1>{title}</h1>
        <img src={assets.theme_pattern} alt="" />
      </div>
    </div>
  )
}

export default Title