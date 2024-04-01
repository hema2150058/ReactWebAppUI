import React, { useState } from 'react';
import { useNavigate, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye, } from '@fortawesome/free-solid-svg-icons';

import './Login.css';

const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    //const [showAlert, setShowAlert] = useState(false);

    const validUsername = 'user';
    const validPassword = 'password';

    const handleLogin = (e) => {
        e.preventDefault();
        // Static data for user validation

        localStorage.setItem("username", validUsername);

        // Check if entered credentials match static data
        if (username === validUsername && password === validPassword) {
            // Navigate to dashboard if credentials are valid
            navigate('/dashboard');
        } else {
            // Show alert box if credentials are incorrect
            alert('Incorrect username or password. Please try again.');
            setPassword('');

            //setShowAlert(true);
        }
    }
    const togglePasswordVisibility = () => {
        setShowPassword(showPassword ? false : true);
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

                                </div>
                            </div>
                            <button disabled={username && password ? false : true} type="submit" className='button'>Login</button>
                        </form>
                    </div>
                    <div className='verticalLine'></div>
                    <div className="create-profile-container">
                        <h2>New to Inspira Financial?</h2>
                        <p>Create an online profile to manage your Inspira account. </p>
                        <button type='button' className='profilebutton' onClick={handleLogin}><h5>CREATE PROFILE</h5></button>
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




