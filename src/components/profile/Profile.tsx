import React from 'react';
import './Profile.css';
import ProfilePic from "../../assets/images/img.png";

export default function Profile() {
    return (
        <div className="profile-body">
            <div className="img-box">
                <img src={ProfilePic} alt="Profile pic" />
            </div>
            <h2>BILAL HUSSAIN</h2>
            <h3>WEB DEVELOPER</h3>
        </div>
    )
}
