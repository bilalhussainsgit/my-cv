import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();
    const handleUserRedirection = () => {
        // if (AuthService.isLoggedIn()) {
            return navigate("/cv");
        // }
        // return navigate("/login");
    };

    return (
        <div className='home-body'>
            <button
                className='btn-grad'
                onClick={() => handleUserRedirection()}
            >
                Create my CV
            </button>
        </div>
    )
}

export default HomePage
