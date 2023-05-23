import React, { useState } from 'react'
import axios from 'axios';

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("password");

    const handleSignUp = () => {
        console.log("check")
        const url = "https://4987-119-160-96-219.ngrok-free.app/auth"
        const data = { email, password };

        axios
            .post(url, data)
            .then((response => {
                console.log(response.data);
            }))
            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <>
            <div className="login-body">
                <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="signup">
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
                    <button onClick={handleSignUp}>Sign up</button>
                </div>

                <div className="login">
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
                    <button >Login</button>
                </div>
            </div>
        </>
    )
}

export default LoginPage
