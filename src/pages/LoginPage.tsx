import React, { useState } from 'react'
import AuthService from "../services/AuthService";
import StorageService from '../services/StorageService';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e: any) => {
        e.preventDefault();
        let user_data = { email: email, password: password };
        AuthService.register(user_data) // creates account
            .then((res: any) => {
                if (res.status === "success") {
                    StorageService.setSession(res.data); // stores data in local storage
                    navigate('/entry');
                }
            })
            .catch((error: any) => { console.log(error) });
    }

    const handleLogin = (e: any) => {
        e.preventDefault();
        let user_data = { email: email, password: password };
        AuthService.login(user_data) // login the user
            .then((res: any) => {
                console.log("I am Logged in");
                StorageService.setSession(res.data); // stores data in local storage
                navigate('/entry');
            })
            .catch((error: any) => console.log(error));
    }

    return (
        <>
            <div className="login-body">
                <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="signup">
                    <form onSubmit={(e) => handleSignUp(e)}>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="on"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            autoComplete="on"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button type="submit">Sign up</button>
                    </form>
                </div>

                <div className="login">
                    <form onSubmit={(e) => handleLogin(e)}>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="on"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            name="pswd"
                            placeholder="Password"
                            autoComplete="on"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage
