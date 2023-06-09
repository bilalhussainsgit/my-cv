import React from 'react'
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/AuthService";

const HomePage = () => {

    const navigate = useNavigate();
    const handleUserRedirection = () => {
        if (AuthService.isLoggedIn()) {
            return navigate("/entry");
        }
        return navigate("/login");
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
