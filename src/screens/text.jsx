import React, { useState } from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
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

  const [errors, setErrors] = useState({});
  const [errorFields, setErrorFields] = useState([]);

  const handleChange = (e) => {
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

    if (name === 'email' && !validateEmail(value)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address'
      });
    } else {
      setErrors({
        ...errors,
        email: ''
      });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const fieldsWithErrors = [];
    for (const fields of ['firstName', 'lastName', 'userName', 'password', 'confirmPassword']) {
      if (!formData[fields].trim()) {
        fieldsWithErrors.push(fields);
        console.log(fieldsWithErrors);
      }
    }
    setErrorFields(fieldsWithErrors);

    if (fieldsWithErrors.length === 0) {
      alert(`Registration successful!\n${JSON.stringify(formData, null, 2)}`);
    } else {
      alert('Please fill out all required fields and fix validation errors');
      console.log(errorFields);

    }
    
    
    // if (validateForm()) {
    //   // Form submission logic
    //   alert(`Registration successful!\n${JSON.stringify(formData, null, 2)}`);
    // } else {
    //   alert('Please fill out all required fields and fix validation errors');
    // }
  };

  const validateEmail = (email) => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'userName', 'password', 'confirmPassword'];
    for (const key of requiredFields) {
      //if (formData.hasOwnProperty(key)) {
        console.log(key);
        if (formData[key].trim() === '' || errors[key]) {
          return false;
        }
    
    }
    return true;
  };
  return (
    // <><div>
    //     <header className="header">
    //       <NavLink to='/'>
    //         <img src={require('../../assets/InspiraLogo.jpg')} alt="Logo" width={120} height={70} />
    //       </NavLink>
    //     </header>
    //     <div className='cProfile-container'>
    //       <h2>Create Profile</h2>
    //       <form onSubmit={handleSubmit}>
    //         <div>
    //           <label>Username:</label>
    //           <input type="text" name="userName" value={formData.userName} onChange={handleChange} onBlur={handleChange} />
    //           {errors.userName && <p className='cProfile-error-msg'>{errors.userName}</p>}
    //         </div>
    //         <div>
    //           <label>Password:</label>
    //           <input type="password" name="password" value={formData.password} onChange={handleChange} onBlur={handleChange} />
    //           {errors.password && <p className='cProfile-error-msg'>{errors.password}</p>}
    //         </div>
    //         <div>
    //           <label>Confirm Password:</label>
    //           <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} onBlur={handleChange} />
    //           {errors.confirmPassword && <p className='cProfile-error-msg'>{errors.confirmPassword}</p>}
    //         </div>
    //         <div>
    //           <label>Email:</label>
    //           <input type="text" name="email" value={formData.email} onChange={handleChange} onBlur={handleChange} />
    //           {errors.email && <p className='cProfile-error-msg'> {errors.email}</p>}
    //         </div>
    //         <div>
    //           <label>First Name:</label>
    //           <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} onBlur={handleChange} />
    //           {errors.firstName && <p className='cProfile-error-msg'>{errors.firstName}</p>}
    //         </div>
    //         <div>
    //           <label>Last Name:</label>
    //           <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} onBlur={handleChange} />
    //           {errors.lastName && <p className='cProfile-error-msg'>{errors.lastName}</p>}
    //         </div>
    //         <div>
    //           <label>Date of Birth:</label>
    //           <input type="date" name="dob" value={formData.dob} onChange={handleChange} onBlur={handleChange} />
    //           {errors.dob && <p className='cProfile-error-msg'>{errors.dob}</p>}
    //         </div>
    //         <div>
    //           <label>Gender:</label>
    //           <select name="gender" value={formData.gender} onChange={handleChange} onBlur={handleChange}>
    //             <option value="">Select Gender</option>
    //             <option value="male">Male</option>
    //             <option value="female">Female</option>
    //             <option value="other">Other</option>
    //           </select>
    //           {errors.gender && <p className='cProfile-error-msg'>{errors.gender}</p>}
    //         </div>
    //         <div>
    //           <label>Phone Number:</label>
    //           <input type="number" name="phoneNumber" maxLength={10} value={formData.phoneNumber} onChange={handleChange} onBlur={handleChange} />
    //           {errors.phoneNumber && <p className='cProfile-error-msg'>{errors.phoneNumber}</p>}
    //         </div>
    //         <div>
    //           <label>Address:</label>
    //           <textarea name="address" value={formData.address} onChange={handleChange} onBlur={handleChange} />
    //           {errors.address && <p className='cProfile-error-msg'>{errors.address}</p>}
    //         </div>

    //         {/* Add more fields here */}
    //         <button type="submit" className='register'>Register</button>
    //       </form>
    //     </div>
    // </div>
    <><div>
      <header className="header">
        <NavLink to='/'>
          <img src={require('../../assets/InspiraLogo.jpg')} alt="Logo" width={120} height={70} />
        </NavLink>
      </header>
      <Container className='cProfile-container'>
        <h2>Create Profile</h2>
        <form onSubmit={handleSubmit} className='cProfile-form'>
          <Container style={{ marginTop: '15px' }}>
            <Row className="row">
              <Col >
                <label>First Name*:</label>
                <div className="input-container">
                  <input type="text" name="firstName" placeholder='Enter your firstname' value={formData.firstName} onChange={handleChange} 
                    className={[errorFields.includes('firstName') ? 'inputerror' :'' ,console.log(errorFields.includes('firstName'))]} onBlur={handleChange} />
                  {errors.firstName && <p className='cProfile-error-msg'>{errors.firstName}</p>}
                </div>
              </Col>
              <Col>
                <label>Last Name*:</label>
                <div className="input-container">
                  <input type="text" name="lastName" placeholder='Enter your lastname' value={formData.lastName} onChange={handleChange} onBlur={handleChange} />
                  {errors.lastName && <p className='cProfile-error-msg'>{errors.lastName}</p>}
                </div>
              </Col>
            </Row>
            <Row className="row">
              <Col>
                <label>Username*:</label>
                <div className="input-container">
                  <input type="text" name="userName" placeholder='Enter your username' value={formData.userName} onChange={handleChange} onBlur={handleChange} />
                  {errors.userName && <p className='cProfile-error-msg'>{errors.userName}</p>}
                </div>
              </Col>
              <Col>
                <label>Email*:</label>
                <div className="input-container">
                  <input type="text" name="email" placeholder='Enter your email' value={formData.email} onChange={handleChange} onBlur={handleChange} />
                  {errors.email && <p className='cProfile-error-msg'> {errors.email}</p>}
                </div>
              </Col>
            </Row>
            <Row className="row">
              <Col>
                <label>Password*:</label>
                <div className="input-container">
                  <input type="password" name="password" value={formData.password} onChange={handleChange} onBlur={handleChange} />
                  {errors.password && <p className='cProfile-error-msg'>{errors.password}</p>}
                </div>
              </Col>
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
                  {errors.dob && <p className='cProfile-error-msg'>{errors.dob}</p>}
                </div>
              </Col>
              <Col>
                <label>Phone Number:</label>
                <div className="input-container">
                  <input type="text" name="phoneNumber" maxLength={10} value={formData.phoneNumber} onChange={handleChange} onBlur={handleChange} />
                  {errors.phoneNumber && <p className='cProfile-error-msg'>{errors.phoneNumber}</p>}
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
                  {errors.gender && <p className='cProfile-error-msg'>{errors.gender}</p>}
                </div>
              </Col>

              <Col sm={8}>
                <label>Address:</label>
                <div className="input-container">
                  <textarea name="address" value={formData.address} onChange={handleChange} rows={1} onBlur={handleChange} />
                  {errors.address && <p className='cProfile-error-msg'>{errors.address}</p>}
                </div>
              </Col>
            </Row>
            <Button type="submit" style={{ backgroundColor: "navy" }} className='registerbtn' >Register</Button>
          </Container>
        </form>

      </Container>
    </div>
    </>
  );
};

export default CreateProfile;