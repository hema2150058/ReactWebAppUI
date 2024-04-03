import React, { useState } from 'react';
import { useNavigate, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye, } from '@fortawesome/free-solid-svg-icons';

import './Login.css';
import { useEffect } from 'react';

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

    const validUsername = 'user';
    const validPassword = 'password';

    const handleLogin = (e) => {
        e.preventDefault();
        // Static data for user validation

        // if(username==='' && password===''){
        //     alert('Please enter username and password. ');
        //     return;
        // }

        localStorage.setItem("username", validUsername);

        // Check if entered credentials match static data
        if (username === validUsername && password === validPassword) {
            // Navigate to dashboard if credentials are valid
            navigate('/dashboard');
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
        alert('will navigate to registration screen');
    }

    return (
        <div className='mainSection'>
            <header className="header">
                <NavLink to='/'>
                    <img src={require('../../assets/InspiraLogo.jpg')} alt="Logo" width={120} height={70} />
                </NavLink>
            </header>
            <div className="login-container">
                <div className="content-container">
                    <div className="login-form-container">
                        <h2>Login</h2>
                        <form onSubmit={handleLogin}>
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
                        <h2>New to Inspira Financial?</h2>
                        <p>Create an online profile to manage your Inspira account. </p>
                        <button type='button' className='profilebutton' onClick={handleRegister}><h5>CREATE PROFILE</h5></button>
                    </div>
                </div>
                {/* {showAlert && (
                    <div className='alert'>
                        Incorrect username or password. Please try again.
                    </div>
                )} */}
            </div>
        </div>
    );
}


export default Login




