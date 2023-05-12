import React from 'react';
import "./CvPage.css";
import Profile from "../profile/Profile";

export default function CvPage() {
  return (
    <div>
      <div className="page">
        <div className="left-side">
          <Profile />
        </div>
        <div className="right-side"></div>
      </div>
    </div>
  )
}
