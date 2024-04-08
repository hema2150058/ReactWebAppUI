import React, { useState } from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Container, Button, Form, InputGroup } from 'react-bootstrap';
import './CreateProfile.css';

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    confirmPassword: '',
    email: '',
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    phoneNumber: '',
    address: ''
  });
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const handleSubmit1 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      alert('Please fill out all required fields and fix validation errors');
    }

    setValidated(true);
  };

  const [errors, setErrors] = useState({});
 

  const handleChange = (e, field) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (['firstName', 'lastName', 'userName', 'password', 'confirmPassword'].includes(name)) {
      if (value && value.trim() === '') {
        setErrors({
          ...errors,
          [name]: 'This field is required'
        });
      } else {
        setErrors({
          ...errors,
          [name]: ''
        });
      }
    }

    if (name === 'password') {
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordPattern.test(value)) {
        setErrors({
          ...errors,
          password: 'Password must contain at least one lowercase letter, one uppercase letter, one special character, one digit, and be at least 8 characters long'
        });
      } else {
        setErrors({
          ...errors,
          password: ''
        });
      }
    }

    if (name === 'password' || name === 'confirmPassword') {
      if (formData.confirmPassword !== formData.password) {
        setErrors({
          ...errors,
          confirmPassword: 'Passwords do not match'
        });
      } else {
        setErrors({
          ...errors,
          confirmPassword: ''
        });
      }
    }
  };
  return (
    <><div>
      <header className="header">
        <NavLink to='/'>
          <img src={require('../../assets/InspiraLogo.jpg')} alt="Logo" width={120} height={70} />
        </NavLink>
      </header>
      <Container className='cProfile-container'>
        <h2>Create Profile</h2>
        {/* <form onSubmit={handleSubmit} > */}
        <Form noValidate validated={validated} className='cProfile-form' onSubmit={handleSubmit1}>
          <Container style={{ marginTop: '15px' }}>
            <Row className="row">
              <Col>
                <label>First Name*:</label>
                <div className="input-container">
                  <Form.Control required type="text" name="firstName" placeholder='Enter your firstname' 
                  value={formData.firstName} minLength={3} 
                  pattern="^[a-zA-Z]+$" isInvalid={ validated && !/^[a-zA-Z]+$/.test(formData.firstName) } 
                  onChange={(e) => handleChange(e, 'firstName')} />
                  
                  <Form.Control.Feedback type="invalid">
                  
                                Please enter a valid firstname 
                  </Form.Control.Feedback>
                  </div>
              </Col>
              <Col>
                <label>Last Name*:</label>
                <div className="input-container">
                  <Form.Control required type="text" name="lastName" placeholder='Enter your lastname'
                   value={formData.lastName}  minLength={3}
                   pattern="^[a-zA-Z0-9]+$" isInvalid={ validated && !/^[a-zA-Z0-9]+$/.test(formData.lastName) } 
                   onChange={(e) => handleChange(e, 'lastName')}  />
                  <Form.Control.Feedback type="invalid">
                                Please enter a valid firstname 
                  </Form.Control.Feedback>                </div>
              </Col>
            </Row>
            <Row className="row">
              <Col>
                <label>Username*:</label>
                <div className="input-container">
                  <Form.Control type="text" name="userName" placeholder='Enter your username' 
                  value={formData.userName} minLength={5} required
                  pattern="^[a-zA-Z0-9]+$" isInvalid={ validated && !/^[a-zA-Z0-9]+$/.test(formData.userName) } 
                  onChange={(e) => handleChange(e, 'userName')}  />
                 <Form.Control.Feedback type="invalid">
                               Please enter a valid username 
                 </Form.Control.Feedback> 
                  
                </div>
              </Col>
              <Col>
                <label>Email*:</label>
                <div className="input-container">
                  <Form.Control type="text" name="email" placeholder='Enter your email' 
                  value={formData.email} required pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
                  isInvalid={validated && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)}
                  onChange={(e) => handleChange(e, 'email')} />
                  <Form.Control.Feedback type="invalid">
                               Please enter a valid email format 
                 </Form.Control.Feedback> 
                </div>
              </Col>
            </Row>
            <Row className="row">
              <Col>
                <label>Password*:</label>
                <div className="input-container">
                  <Form.Control type="password" name="password" 
                  value={formData.password} required pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
                  isInvalid={validated && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)}
                  onChange={(e) => handleChange(e, 'password')} onBlur={handleChange} />
                  <Form.Control.Feedback type="invalid">
                               Please enter a valid password 
                 </Form.Control.Feedback>
                </div>
              </Col>
              {/* <Col>
                <label>Confirm Password*:</label>
                <div className="input-container">
                  <Form.Control type="password" name="confirmPassword" 
                  value={formData.confirmPassword} required pattern={formData.password}
                   isInvalid={[validated && formData.confirmPassword !== formData.password,]}
                   onChange={(e) => handleChange(e, 'confirmPassword')} />
                  {errors.confirmPassword && <p className='cProfile-error-msg'>{errors.confirmPassword}</p>}
                </div>
              </Col> */}
              <Col>
                <label>Confirm Password*:</label>
                <div className="input-container">
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} onBlur={handleChange} />
                  {errors.confirmPassword && <p className='cProfile-error-msg'>{errors.confirmPassword}</p>}
                </div>
              </Col>
            </Row>
            <Row className="row">
              <Col>
                <label>Date of Birth:</label>
                <div className="input-container">
                  <input type="date" name="dob" className='date' value={formData.dob} onChange={handleChange} onBlur={handleChange} />
                  {/* {errors.dob && <p className='cProfile-error-msg'>{errors.dob}</p>} */}
                </div>
              </Col>
              <Col>
                <label>Phone Number:</label>
                <div className="input-container">
                  <input type="text" name="phoneNumber" maxLength={10} value={formData.phoneNumber} onChange={handleChange} onBlur={handleChange} />
                  {/* {errors.phoneNumber && <p className='cProfile-error-msg'>{errors.phoneNumber}</p>} */}
                </div>
              </Col>

            </Row>
            <Row className="row">
              <Col sm={4}>
                <label>Gender:</label>
                <div className="input-container">
                  <select name="gender" value={formData.gender} onChange={handleChange} onBlur={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {/* {errors.gender && <p className='cProfile-error-msg'>{errors.gender}</p>} */}
                </div>
              </Col>

              <Col sm={8}>
                <label>Address:</label>
                <div className="input-container">
                  <input name="address" value={formData.address} onChange={handleChange} rows={1} onBlur={handleChange} />
                  {/* {errors.address && <p className='cProfile-error-msg'>{errors.address}</p>} */}
                </div>
              </Col>
            </Row>
            <Button type="submit" style={{ backgroundColor: "navy" }} className='registerbtn' >Register</Button>
          </Container>
        </Form>

      </Container>
    </div>
    </>
  );
};

export default CreateProfile;


// import React from "react";
// import styled from "styled-components";
// //import { GlobalStyle } from "./Styles/globalStyles";
// import { useFormik } from "formik";
// import { signUpSchema } from "../../components";

// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   confirm_password: "",
// };

// const CreateProfile = () => {
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues,
//       validationSchema: signUpSchema,
//       onSubmit: (values, action) => {
//         console.log(
//           "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
//           values
//         );
//         action.resetForm();
//       },
//     });
//   console.log(
//     "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
//     errors
//   );

//   return (
//     <>
//         <div className="container">
//           <div className="modal">
//             <div className="modal-container">
//               <div className="modal-left">
//                 <h1 className="modal-title">Welcome!</h1>
//                 <p className="modal-desc">
//                   To the thapa technical website for programmers.
//                 </p>
//                 <form onSubmit={handleSubmit}>
//                   <div className="input-block">
//                     <label htmlFor="name" className="input-label">
//                       Name
//                     </label>
//                     <input
//                       type="name"
//                       autoComplete="off"
//                       name="name"
//                       id="name"
//                       placeholder="Name"
//                       value={values.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.name && touched.name ? (
//                       <p className="form-error">{errors.name}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="email" className="input-label">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       autoComplete="off"
//                       name="email"
//                       id="email"
//                       placeholder="Email"
//                       value={values.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.email && touched.email ? (
//                       <p className="form-error">{errors.email}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="password" className="input-label">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       autoComplete="off"
//                       name="password"
//                       id="password"
//                       placeholder="Password"
//                       value={values.password}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.password && touched.password ? (
//                       <p className="form-error">{errors.password}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="confirm_password" className="input-label">
//                       Confirm Password
//                     </label>
//                     <input
//                       type="password"
//                       autoComplete="off"
//                       name="confirm_password"
//                       id="confirm_password"
//                       placeholder="Confirm Password"
//                       value={values.confirm_password}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.confirm_password && touched.confirm_password ? (
//                       <p className="form-error">{errors.confirm_password}</p>
//                     ) : null}
//                   </div>
//                   <div className="modal-buttons">
//                     <a href="#" className="">
//                       Want to register using Gmail?
//                     </a>
//                     <button className="input-button" type="submit">
//                       Registration
//                     </button>
//                   </div>
//                 </form>
//                 <p className="sign-up">
//                   Already have an account? <a href="#">Sign In now</a>
//                 </p>
//               </div>
//               <div className="modal-right">
//                 <img
//                   src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
      
//     </>
//   );
// };

// export default CreateProfile;