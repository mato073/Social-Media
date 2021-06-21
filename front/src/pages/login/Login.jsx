import React, { useState } from 'react'
import './login.css'
import { useHistory } from "react-router-dom";
import { get_token } from '../../redux/Actions/Actions'
import { useDispatch } from 'react-redux'

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const login = () => {
        dispatch(get_token(email, password)).then((data) => {
            if (data.type !== 'USER_ERR')
                history.push('/home')
        })
    }

    const goToHistory = async () => {
        history.push('/register')
    }
    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginlogo">The best</h3>
                    <span className="loginDesc">This is a self asigne project</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <h3 className="loginlogo">Login</h3>
                        <input className="loginInput" type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                        <input className="loginInput" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                        <button className="loginButton" onClick={login}>Log In</button>
                        <span className="loginForgot">Forgot password ?</span>
                        <button className="loginRegisterButton" onClick={goToHistory}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
