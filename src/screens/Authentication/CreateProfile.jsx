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
    else{
    console.log(JSON.stringify(formData));
    alert('registred');
    navigate('/');
    }
    setValidated(true);

  };
  var phoneValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let curr = new Date();
  curr.setDate(curr.getDate());
  let date = curr.toISOString().substring(0, 10); 

  const handleChange = (e, field) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

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
                  value={formData.email}  pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$' required
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
                  <Form.Control type="password" name="password" required
                  value={formData.password}  pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
                  isInvalid={validated && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)}
                  onChange={(e) => handleChange(e, 'password')} onBlur={handleChange} />
                  <Form.Control.Feedback type="invalid">
                               Please enter a valid password 
                 </Form.Control.Feedback>
                </div>
              </Col>
              <Col>
                <label>Confirm Password*:</label>
                <div className="input-container">
                  <Form.Control type="password" name="confirmPassword" required
                  value={formData.confirmPassword}  pattern={formData.password}
                  isInvalid={ validated && formData.confirmPassword !== formData.password}
                  onChange={handleChange}/>
                   <Form.Control.Feedback type="invalid">
                   Please enter a valid password                                 
                 </Form.Control.Feedback>
                  {/* {errors.confirmPassword && <p className='cProfile-error-msg'>{errors.confirmPassword}</p>} */}
                </div>
              </Col>
              
            </Row>
            <Row className="row">
              <Col>
                <label>Date of Birth:</label>
                <div className="input-container" style={{height: '20px'}}>
                  <Form.Check type="date" name="dob" className='date' value={formData.dob} 
                    max={date} onChange={handleChange} />
                  {/* {errors.dob && <p className='cProfile-error-msg'>{errors.dob}</p>} */}
                </div>
              </Col>
              <Col>
                <label style={{marginBottom: '15px'}}>Phone Number:</label>
                <div className="input-container" >
                  <Form.Check type="text" name="phoneNumber" maxLength={10} 
                  value={formData.phoneNumber} onChange={handleChange} />
                </div>
              </Col>

            </Row>
            <Row className="row">
              <Col sm={4}>
              <label>Gender:</label>
                <div className="input-container">
              <Form.Select name="gender" style={{backgroundColor: 'lightsteelblue'}}
               value={formData.gender} onChange={handleChange} className='form-select' 
               onInvalid={!validated}>
                <option>Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </Form.Select>
              </div>
              </Col>

              <Col sm={8}>
                <label>Address:</label>
                <div className="input-container">
                  <Form.Control as='textarea' name="address" value={formData.address} onChange={handleChange} rows={1} 
                   />                  
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
