import React, { useState } from 'react'
import './register.css'
import { registerUser } from '../../services/auth.service'
import { useHistory } from "react-router-dom";

const Register = (props) => {
    const [email, setEmail] = useState(null);
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [password, setPassword] = useState(null);
    const [password2, setPassword2] = useState(null);
    const history = useHistory();

    const registerNewUser = async () => {
        const { history } = props;
        if (password !== password2 || password.length < 6)
            return;
        if (firstname.length < 2 || lastname < 2)
            return;
        if (!email.includes("@"))
            return
        const result = await registerUser(firstname, lastname, email, password);
        console.log(result);
        if (result.status === 200)
            history.push('/')
    }

    const goToLogin = () => {
        history.push('/')
    }

    return (
        <div className="registerContainer">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerlogo">The best</h3>
                    <span className="registerDesc">This is a self asigne project</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <h3 className="registerlogo">Register</h3>
                        <input className="registerInput" type="email" placeholder="Email" onChange={(value) => setEmail(value.target.value)} />
                        <input className="registerInput" type="text" placeholder="First name" onChange={(value) => setFirstname(value.target.value)} />
                        <input className="registerInput" type="text" placeholder="Last name" onChange={(value) => setLastname(value.target.value)} />
                        <input className="registerInput" type="password" placeholder="Password" onChange={(value) => setPassword(value.target.value)} />
                        <input className="registerInput" type="password" placeholder="Confirm password" onChange={(value) => setPassword2(value.target.value)} />
                        <button className="registerButton" onClick={registerNewUser} >Register</button>
                        <button className="registerRegisterButton" onClick={goToLogin}>Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
