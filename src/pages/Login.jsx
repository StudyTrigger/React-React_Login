import React from 'react';
import './Login.css';
import { useState } from 'react';

export function Login() {
    const [user, setUser] = useState({ email: '', password: '' })

    const handleLogin = async (e) => {
        e.preventDefault();
        //Change your credential here or fetch from server
        if (user.email === "test@gmail.com" && user.password === 'test@123') {
            alert("Valid User");
        } else {
            alert("Invalid User");
        }
    }

    return (
        <>
            <section className="container">
                <div className="login-container">
                    <div className="circle circle-one"></div>
                    <div className="form-container">
                        <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
                        <h1 className="opacity">LOGIN</h1>
                        <form>
                            <input
                                type="text"
                                placeholder="USERNAME"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })} />
                            <input
                                type="password"
                                placeholder="PASSWORD"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                            <button className="opacity" onClick={(e) => handleLogin(e)}>SUBMIT</button>
                        </form>
                        <div className="register-forget opacity">
                            <a href="">REGISTER</a>
                            <a href="">FORGOT PASSWORD</a>
                        </div>
                    </div>
                    <div className="circle circle-two"></div>
                </div>
                <div className="theme-btn-container"></div>
            </section>
        </>
    )
}