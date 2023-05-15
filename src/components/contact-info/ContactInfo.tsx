import React from 'react';
import './ContactInfo.css';

export default function ContactInfo() {
  return (
    <div className='contact-body'>
        <h3 className='title'>CONTACT INFO</h3>
        <ul>
            <li>
                <span className='icon'><i className="fa fa-phone" aria-hidden="true"></i></span>
                <span className='text' contentEditable="true">+92 307 8861690</span>
            </li>
            <li>
                <span className='icon'><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                <span className='text' contentEditable="true">Lahore, Punjab, Pakistan</span>
            </li>
            <li>
                <span className='icon'><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                <span className='text' contentEditable="true">Linkedin.com/in/me</span>
            </li>
            <li>
                <span className='icon'><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                <span className='text' contentEditable="true">abcd@gmail.com</span>
            </li>
        </ul>
    </div>
  )
}
