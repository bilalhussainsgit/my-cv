import React from 'react';
import Profile from "../components/Profile";
import Education from '../components/Education';
import Languages from '../components/Languages';
import Objective from '../components/Objective';
import '../assets/styles/Style.css';

export default function CvPage() {
  return (
    <div>
      <div className="page">
        <div className="left-side">
          <Profile />
          <Education />
          <Languages />
        </div>
        <div className="right-side">
          <Objective />
        </div>
      </div>
    </div>
  )
}
