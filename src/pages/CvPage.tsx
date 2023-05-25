import React from 'react';
import Profile from "../components/profile/Profile";
import Education from '../components/education/Education';

export default function CvPage() {
  return (
    <div>
      <div className="page">
        <div className="left-side">
          <Profile />
          <Education />
        </div>
        <div className="right-side">
        </div>
      </div>
    </div>
  )
}
