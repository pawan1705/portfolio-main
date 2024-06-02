// import React from 'react'
import "./About.css";
import { assets } from "../../assets/assets";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={assets.theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={assets.profile2} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a frontend developer with the Experience of some
              Internship.Through my career , I have had of collaboration with
              prestigious organizations ,contributing to their success and
              growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node js </p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p> Express js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>C & C++</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>
            3+
          </h1>
          <p>PROJECT COMPLETED</p>
        </div><hr />
        <div className="about-achievement">
          <h1>
            1+
          </h1>
          <p>YEAR EXPERIENCE </p> 
        </div><hr />
        <div className="about-achievement">
          <h1>
            3+
          </h1>
          <p>HAPPY CLIENTS </p>
        </div>
      </div>
    </div>
  );
};

export default About;
