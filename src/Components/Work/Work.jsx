import React from 'react'
import './Work.css'; 
import {assets} from '../../assets/assets';
import mywork_data from '../../assets/mywork_data'
const Work = () => {
  return (
    <div className='work'>
      <div className="work-container">
        {
          mywork_data.map((work,i)=>{
            return(<div key={i} className='box1'>
              <img src={work.w_img} alt=""  className='work-img'/>
              <h3>{work.w_name}</h3>
              </div>
            )
          })
        }
      </div>
      <div className="work-show-more">
        <p>Show More..</p>
        <img src={assets.arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default Work