import React, { useState } from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye, } from '@fortawesome/free-solid-svg-icons';

import './Login.css';
import { useEffect } from 'react';
import LoginStatus from '../../API/LoginStatus';

const Login = () => {

    useEffect(() => {
        localStorage.clear();
    })

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [userNameError, setUserNameError] = useState();
    const [passwordError, setPasswordError] = useState();
    //const [showAlert, setShowAlert] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        // Static data for user validation

        if (username === '' && password === '') {
            alert('Please enter username and password. ');
            return;
        }

        const userdata = {
            "username": username,
            "password": password
        }

        const response = await LoginStatus(userdata);
        console.log("Status-Code: " + response);
        // localStorage.setItem("username", response);

        localStorage.setItem("username", userdata.username);

        // Check if entered credentials match static data
        if (response==="Success") {
            // Navigate to dashboard if credentials are valid
            navigate('/home');
        } else if (!username.trim() && !password.trim()) {
            setUserNameError('Username is required');
            setPasswordError('Password is required');

        }
        else if (!username.trim() && password.trim()) {
            setUserNameError('Username is required');
            setPasswordError('');

        }
        else if (username.trim() && !password.trim()) {
            setUserNameError('');
            setPasswordError('Password is required');

        }
        else if (!username.trim()) {
            setUserNameError('Username is required');
        } else if (!password.trim()) {
            setPasswordError('Password is required');
        }
        else {
            setUserNameError('');
            setPasswordError('');
            //setUsername('');
            setPassword('');
            alert('Invalid credentials. Please try again.');
        }
    }
    const togglePasswordVisibility = () => {
        setShowPassword(showPassword ? false : true);
    }

    const handleRegister = () => {
        //alert('will navigate to registration screen');
        navigate('/createProfile');
    }

    return (
        <div className='mainSection'>
            <header className="header">
                <NavLink to='/'>
                    <img src={require('../../assets/logo.png')} alt="Logo" width={90} height={65} />
                </NavLink>
            </header>
            <div className="login-container">
                <div className="content-container">
                    <div className="login-form-container">
                        <h2 className='h2style'>Login</h2>
                        <form style={{ marginTop: 20 }} onSubmit={handleLogin}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={username}
                                    placeholder='Enter your username'
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                {userNameError ? <p style={{ color: 'red', fontSize: 12, marginTop: 0, marginLeft: '2px' }}>{userNameError}</p> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className='password-input'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        value={password}
                                        placeholder='Enter your password'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {/* <i className={`password-toggle ${showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}`} 
//                                     onClick={togglePasswordVisibility}></i> */}
                                    <span className='toggleicon' onClick={togglePasswordVisibility}>{showPassword ? <FontAwesomeIcon icon={faEye} color='grey' /> : <FontAwesomeIcon icon={faEyeSlash} color='grey' />}</span>
                                    {passwordError ? <p style={{ color: 'red', fontSize: 12, marginTop: 0, marginLeft: '2px' }}>{passwordError}</p> : null}

                                </div>
                            </div>
                            <button type="submit" className='button'>Login</button>
                        </form>
                    </div>
                    <div className='verticalLine'></div>
                    <div className="create-profile-container">
                        <h2 className='h2style'>New to this portal?</h2>
                        <p style={{ marginTop: 20 }}>Create an online profile to manage your account online. </p>
                        <button type='button' className='profilebutton' onClick={handleRegister}><h6 style={{ marginTop: 5 }}>CREATE PROFILE</h6></button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login




