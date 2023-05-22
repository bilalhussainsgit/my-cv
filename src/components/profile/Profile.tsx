import React from 'react';
import './Profile.css';
import ProfilePic from "../../assets/images/img.png";

export default function Profile() {
    return (
        <div className="profile-body">
            <div className="img-box">
                <img src={ProfilePic} alt="Profile pic" />
            </div>
            <h2>Bilal Hussain<br/><span>Web Developer</span></h2>
        </div>
    )
}
