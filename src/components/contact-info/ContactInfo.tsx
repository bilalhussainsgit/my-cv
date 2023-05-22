import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import './ContactInfo.css';

export default function ContactInfo() {

    const [contactInfo, setContactInfo] = useState<{ [key: string]: any }>({
        phone: "+92 307 8861690",
        location: "Lahore, Punjab, Pakistan",
        linkedin: "Linkedin.com/in/me",
        email: "bilalhussain@gmail.com"
    });

    const handleChange = (updatedValue: any) => {
        setContactInfo(contactInfo => ({
            ...contactInfo,
            ...updatedValue
        }));
        console.log(JSON.stringify(contactInfo, null, 2));
    }


    return (
        <div className='contact-body'>
            <h3 className='title'>CONTACT INFO</h3>
            <ul>
                <li>
                    <i className="icon fa fa-phone" aria-hidden="true"></i>
                    <ContentEditable
                        className='text'
                        onChange={e => handleChange({ phone: e.currentTarget.innerHTML })}
                        html={contactInfo.phone}
                    />
                </li>
                <li>
                    <i className="icon fa fa-map-marker" aria-hidden="true"></i>
                    <ContentEditable
                        className='text'
                        onChange={e => handleChange({ location: e.currentTarget.innerHTML })}
                        html={contactInfo.location}
                    />
                </li>
                <li>
                    <i className="icon fa fa-linkedin" aria-hidden="true"></i>
                    <ContentEditable
                        className='text'
                        onChange={e => handleChange({ linkedin: e.currentTarget.innerHTML })}
                        html={contactInfo.linkedin}
                    />
                </li>
                <li>
                    <i className="icon fa fa-envelope-o" aria-hidden="true"></i>
                    <ContentEditable
                        className='text'
                        onChange={e => handleChange({ email: e.currentTarget.innerHTML })}
                        html={contactInfo.email}
                    />
                </li>
            </ul>
        </div >
    )
}
