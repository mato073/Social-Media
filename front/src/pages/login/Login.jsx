import React from 'react'
import './login.css'

const Login = () => {
    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginlogo">The best</h3>
                    <span className="loginDesc">This is a self asigne project</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input className="loginInput" type="email" placeholder="email" />
                        <input className="loginInput" type="password" placeholder="password" />
                        <button className="loginButton" >Log In</button>
                        <span className="loginForgot">Forgot password ?</span>
                        <button className="loginRegisterButton" >Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
