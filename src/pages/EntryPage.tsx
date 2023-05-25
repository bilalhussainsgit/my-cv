import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const EntryPage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(firstName);
        console.log(lastName);
        navigate('/cv');
    }
    return (
        <>
            <div className='login-body'>
                <div className="login">
                    <form onSubmit={e => { handleSubmit(e) }}>
                        <label>Your CV is one step away.</label>
                        <h2>Your CV is one step away</h2>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            autoComplete="on"
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            autoComplete="on"
                            onChange={e => setLastName(e.target.value)}
                        />
                        <button type='submit'>Go</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EntryPage
