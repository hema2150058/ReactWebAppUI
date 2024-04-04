// import React from 'react';
// import './Profile.css';

// const Profile = () => {
//   return (
//     <div className='profile-container'>
//       hello profile
//     </div>
//   )
// }

// export default Profile;

import React, { useState } from 'react';
import './Profile.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faSave, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    // Sample user data
    const [userData, setUserData] = useState({
        userName: 'John Doe',
        email: 'john@example.com',
        address: '123 Main St, City',
        phoneNumber: '9879798897'
    });
    // const [email, setEmail] = useState('');

    // var isValid =true;
    // State to track editable fields
    const [editableFields, setEditableFields] = useState({
        userName: false,
        email: false,
        address: false,
        phoneNumber: false
    });

    //const [emailError, setEmailError] = useState('');

    // Function to toggle edit mode for a field
    const toggleEditMode = (field) => {
        setEditableFields(prevState => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    }

    // const handleEmailChange = (text) => {
    //     setEmail(text);
    //     if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(text)) {
    //       setEmailError('Invalid email address');
    //       isValid = false;
    //     } else {
    //       setEmailError('');
    //     }
    //   };
      
    // Function to handle changes to input fields
    const handleChange = (e, field) => {
        setUserData(prevState => ({
            ...prevState,
            [field]: e.target.value
        }));
    }

    // const handleEmailBlur = () => {
    //     if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
    //         setEmailError('Invalid email address blur');
    //         isValid = false;
    //       }
    //       else {
    //         setEmailError('');
    //       }
    // }
    // Function to handle saving changes
    const handleSave = (field) => {
        toggleEditMode(field); // Disable edit mode
        // Perform any save/update logic here
    }

    // Function to handle form submission
    const handleSubmit = () => {

        // isValid = true;
        // handleEmailBlur();
        // if(isValid){
        setEditableFields({
            userName: false,
            email: false,
            phoneNumber: false,
            address: false
        });
        // Perform form submission logic here
        alert(`Changes submitted successfully! \n New user Data: \n${JSON.stringify(userData, null, 2)}`);
    
    }

    return (
        <div className="profile-main">
            <img className='profileImg' src={require('../assets/sampleProfileImg.jpg')} alt="profileImg" />
            <div className="profile-container">
                <div className="profile-box">
                    {/* <h4 className='screenTitle'>User Profile</h4> */}


                    <div className="field">
                        <label>Username</label>
                        <div className="input-container">
                            <input
                                className='profileInput'
                                type="text"
                                value={userData.userName}
                                onChange={(e) => handleChange(e, 'userName')}
                                disabled={!editableFields.userName}
                            />
                            <span className='editIcon'>
                                {editableFields.userName ? (
                                    <FontAwesomeIcon icon={faSquareCheck} onClick={() => handleSave('userName')} />
                                ) : (
                                    <FontAwesomeIcon icon={faEdit} onClick={() => toggleEditMode('userName')} />
                                )}
                            </span>
                        </div>
                    </div>
                    {/* Repeat similar structure for other fields */}
                    <div className="field">
                        <label>Email</label>
                        <div className="input-container">
                            <input
                                className='profileInput'
                                type="email"
                                value={userData.email}
                                onChange={(e) => handleChange(e, 'email')}
                                disabled={!editableFields.email}
                                                            />
                            <span className='editIcon'>
                                {editableFields.email ? (
                                    <FontAwesomeIcon icon={faSquareCheck} onClick={() => handleSave('email')} />
                                ) : (
                                    <FontAwesomeIcon icon={faEdit} onClick={() => toggleEditMode('email')} />
                                )}
                            </span>
                        </div>
                                            </div>
                    <div className="field">
                        <label>Phone number</label>
                        <div className="input-container">
                            <input
                                className='profileInput'
                                type="number"
                                value={userData.phoneNumber}
                                maxLength={10}
                                onChange={(e) => handleChange(e, 'phoneNumber')}
                                disabled={!editableFields.phoneNumber}
                            />
                            <span className='editIcon'>
                                {editableFields.phoneNumber ? (
                                    <FontAwesomeIcon icon={faSquareCheck} size='x' onClick={() => handleSave('phoneNumber')} />
                                ) : (
                                    <FontAwesomeIcon icon={faEdit} onClick={() => toggleEditMode('phoneNumber')} />
                                )}
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label>Address</label>
                        <div className="input-container">
                            <input
                                className='profileInput'
                                type="text"
                                value={userData.address}
                                onChange={(e) => handleChange(e, 'address')}
                                disabled={!editableFields.address}
                            />
                            <span className='editIcon'>
                                {editableFields.address ? (
                                    <FontAwesomeIcon icon={faSquareCheck} onClick={() => handleSave('address')} />
                                ) : (
                                    <FontAwesomeIcon icon={faEdit} onClick={() => toggleEditMode('address')} />
                                )}
                            </span>
                        </div>
                    </div>
                    {/* Repeat similar structure for other fields */}
                    <button className="submit-button" onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faSave} /> Save Changes
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Profile;