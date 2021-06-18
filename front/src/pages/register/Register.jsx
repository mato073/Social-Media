import React from 'react'
import './register.css'

const Register = () => {
    return (
        <div className="registerContainer">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerlogo">The best</h3>
                    <span className="registerDesc">This is a self asigne project</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input className="registerInput" type="email" placeholder="Email" />
                        <input className="registerInput" type="text" placeholder="First name" />
                        <input className="registerInput" type="text" placeholder="Last name" />
                        <input className="registerInput" type="password" placeholder="Password" />
                        <input className="registerInput" type="password" placeholder="Confirm password" />
                        <button className="registerButton" >Register</button>
                        <button className="registerRegisterButton" >Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
