import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContentEditable from 'react-contenteditable';
import ProfilePic from "../assets/images/profile.png";
import '../assets/styles/Profile.css';
import CvService from '../services/CvService';

export default function Profile() {

    const location = useLocation();

    const [linkedin, setLinkedin] = useState("Linkedin.com/in/me");

    const [personal_information, setPersonalInformation] = useState<{ [key: string]: any }>({
        first_name: location.state.firstName,
        last_name: location.state.lastName,
        email: "abcd@gmail.com",
        phone_number: "+92 300 0000000",
        address: "City, Province, Country",
        title: "Web Developer",
        // objective: "find a position..."
    });

    const handleChange = (updatedValue: any) => {
        setPersonalInformation(personal_information => ({
            ...personal_information,
            ...updatedValue
        }));
    }
    
    const handleSave = () => {
        // console.log(JSON.stringify(personal_information, null, 2));
        CvService.postPersonalInfo(personal_information)
        .then((res: any) => {
            console.log("Below is the response of postPersonalInfo");
            console.log(res);
        })
        .catch((error) => console.log(`Error => ${error}`));
    }

    return (
        <>
            <div className="profile-body ">
                <div className="img-box">
                    <img src={ProfilePic} alt="Profile pic" />
                </div>
                <h2>
                    <ContentEditable
                        className='name'
                        onChange={e => handleChange({ first_name: e.currentTarget.innerHTML })}
                        html={personal_information.first_name}
                    />
                    <ContentEditable
                        className='name'
                        onChange={e => handleChange({ last_name: e.currentTarget.innerHTML })}
                        html={personal_information.last_name}
                    />
                    <span>
                        <ContentEditable
                        className='title'
                            onChange={e => handleChange({ title: e.currentTarget.innerHTML })}
                            html={personal_information.title}
                        />
                    </span>
                </h2>
            </div>
            <div className='contact-body'>
                <h3 className='title'>CONTACT INFO</h3>
                <ul>
                    <li>
                        <i className="icon fa fa-phone" aria-hidden="true"></i>
                        <ContentEditable
                            className='text'
                            onChange={e => handleChange({ phone_number: e.currentTarget.innerHTML })}
                            html={personal_information.phone_number}
                        />
                    </li>
                    <li>
                        <i className="icon fa fa-map-marker" aria-hidden="true"></i>
                        <ContentEditable
                            className='text'
                            onChange={e => handleChange({ address: e.currentTarget.innerHTML })}
                            html={personal_information.address}
                        />
                    </li>
                    <li>
                        <i className="icon fa fa-linkedin" aria-hidden="true"></i>
                        <ContentEditable
                            className='text'
                            onChange={e => setLinkedin(e.currentTarget.innerHTML)}
                            html={linkedin}
                        />
                    </li>
                    <li>
                        <i className="icon fa fa-envelope-o" aria-hidden="true"></i>
                        <ContentEditable
                            className='text'
                            onChange={e => handleChange({ email: e.currentTarget.innerHTML })}
                            html={personal_information.email}
                        />
                    </li>
                </ul>
                <button onClick={handleSave}>Save</button>
            </div >
        </>
    )
}
