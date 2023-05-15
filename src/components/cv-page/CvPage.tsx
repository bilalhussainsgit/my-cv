import React from 'react';
import "./CvPage.css";
import Profile from "../profile/Profile";
import ContactInfo from '../contact-info/ContactInfo';
import Education from '../education/Education';

export default function CvPage() {
  return (
    <div>
      <div className="page">
        <div className="left-side">
          <Profile />
          <ContactInfo />
          <Education />
        </div>
        <div className="right-side">
          {/* <div className="objective">
            <h2>PROFILE</h2>
            <p contentEditable="true">I'm a quick learner and technology Enthusiast person. I have a strong desire to learn and grow in a dynamic team environment. I like challenging tasks.</p>
            <h2>Experience</h2>
            <p></p>
          </div> */}
        </div>
      </div>
    </div>
  )
}
