import React from 'react'
import './Service.css'
import {assets} from '../../assets/assets';
import Services_data from '../../assets/services_data'
const Service = () => {
  return (
    <div className='service'>
      <div className="services-container">
        {
          Services_data.map((service,i)=>{
            return(
              <div className="services-format" key={i}>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                {/* <div className="services-read-more">
                  <p>Read More...</p>
                  <img src={assets.arrow_icon} alt="" />
                </div> */}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Service