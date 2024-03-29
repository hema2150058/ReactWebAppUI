// import React, { useState } from 'react';
// import { useNavigate, Link, NavLink } from "react-router-dom";
// import IconButton from "@material-ui/core/IconButton";
// import InputLabel from "@material-ui/core/InputLabel";
// import Visibility from "@material-ui/icons/Visibility";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import Input from "@material-ui/core/Input";
// import './Login.css';

// const Login = () => {
//     const navigate = useNavigate();
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [showAlert, setShowAlert] = useState(false);

//     const [values, setValues] = React.useState({
//         password: "",
//         showPassword: false,
//     });

//     const handleClickShowPassword = () => {
//         setValues({
//             ...values,
//             showPassword: !values.showPassword,
//         });
//     };

//     const handleMouseDownPassword = (event) => {
//         event.preventDefault();
//     };

//     const handlePasswordChange = (prop) => (event) => {
//         setValues({
//             ...values,
//             [prop]: event.target.value,
//         });
//     };

//     const handleLogin = (e) => {
//         e.preventDefault();
//         // Static data for user validation
//         const validUsername = 'user';
//         const validPassword = 'password';

//         // Check if entered credentials match static data
//         if (username === validUsername && password === validPassword) {
//             // Navigate to dashboard if credentials are valid
//             navigate('/dashboard');
//         } else {
//             // Show alert box if credentials are incorrect
//             alert('Incorrect username or password. Please try again.');
//             setShowAlert(true);
//         }
//     }
//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     }

//     return (
//         <div>
//             <header className="header">
//                 <NavLink to='/'>
//                     <img src={require('../assets/InspiraLogo.jpg')} alt="Logo" width={90} height={70} />
//                 </NavLink>
//             </header>
//             <div className="login-container">
//                 <div className="content-container">
//                     <div className="login-form-container">
//                         <h2>Login</h2>
//                         <form onSubmit={handleLogin}>
//                             <div className="form-group">
//                                 <label htmlFor="username">Username</label>
//                                 <input
//                                     type="text"
//                                     id="username"
//                                     name="username"
//                                     value={username}
//                                     placeholder='Enter your username'
//                                     onChange={(e) => setUsername(e.target.value)}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="password">Password</label>
//                                 <Input
//                                     type={
//                                         values.showPassword
//                                             ? "text"
//                                             : "password"
//                                     }
//                                     onChange={handlePasswordChange("password")}
//                                     placeholder='Enter your password'
//                                     value={values.password}
//                                     endAdornment={
//                                         <InputAdornment position="end">
//                                             <IconButton
//                                                 onClick={
//                                                     handleClickShowPassword
//                                                 }
//                                                 onMouseDown={
//                                                     handleMouseDownPassword
//                                                 }
//                                             >
//                                                 {values.showPassword ? (
//                                                     <Visibility />
//                                                 ) : (
//                                                     <VisibilityOff />
//                                                 )}
//                                             </IconButton>
//                                         </InputAdornment>
//                                     }
//                                 />
//                             </div>
//                             <button type="submit">Login</button>
//                         </form>
//                     </div>
//                     <div className="create-profile-container">
//                         <p>First time to xxx? <Link to="/create-profile">Create a new profile</Link></p>
//                     </div>
//                 </div>
//                 {showAlert && (
//                     <div className='alert'>
//                         Incorrect username or password. Please try again.
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }


// export default Login



import React,{useState} from "react";

function ShowAndHidePassword(){
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return(
        <div className="row">
            <div className="col-sm-3">
                <div className="input-group my-4 mx-4">
                    <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" />
                    <div className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                     </button>
                    </div>
                </div>
                
            </div>
      </div>
      
    )
}
export default ShowAndHidePassword;
