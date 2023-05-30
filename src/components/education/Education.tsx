import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContentEditable from 'react-contenteditable';
import './Education.css';

const Education = () => {

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
        console.log(JSON.stringify(personal_information, null, 2));
    }

  return (
    <div className='contact-body education-body'>
      <h3 className='title'>EDUCATION</h3>
      <ul>
        <li>
          <h5>2022 - 2024</h5>
          <h4>Master Degree in Computer Science</h4>
          <h4>Punjab University</h4>
        </li>
        <li>
          <h5>2018 - 2022</h5>
          <h4>Bachelor degree in Information Technology</h4>
          <h4>Punjab University</h4>
        </li>
        <li>
          <h5>2016 - 2018</h5>
          <h4>Intermediate in Science</h4>
          <h4>BISE Lahore</h4>
        </li>
      </ul>
    </div >
  )
}

export default Education
