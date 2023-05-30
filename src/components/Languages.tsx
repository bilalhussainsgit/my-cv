import React from 'react'
import '../assets/styles/Languages.css';

const Languages = () => {
    return (
        <div className='contact-body languages-body'>
            <h3 className='title'>Languages</h3>
            <ul>
                <li>
                    <span className='text'>English</span>
                    <span className='percent'><div style={{width: "80%"}}></div></span>
                </li>
                <li>
                    <span className='text'>Urdu</span>
                    <span className='percent'><div style={{width: "90%"}}></div></span>
                </li>
                <li>
                    <span className='text'>Chinese</span>
                    <span className='percent'><div style={{width: "40%"}}></div></span>
                </li>
            </ul>
        </div>
    )
}

export default Languages
