import React from 'react';
import Profile from "../components/profile/Profile";
import ContactInfo from '../components/contact-info/ContactInfo';
import Education from '../components/education/Education';

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
        </div>
      </div>
    </div>
  )
}
