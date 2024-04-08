import React, { useEffect, useState } from 'react';
import './Profile.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { userProfileData } from '../API/LoginStatus';


const Profile = () => {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("username")) {
            navigate('/')
        }
        async function getUserProfile() {
            try {
                const data = await userProfileData(12);
                console.log("UseEffect Updating");
                setIsLoading(true);
                setUserData({
                    userName: data.username,
                    email: data.email,
                    address: data.address,
                    phoneNumber: data.phone
                });
            } catch (error) {
                console.log("Something Went Wrong");
            }
        }
        getUserProfile();
    }, [navigate])

    // Sample user data
    const [userData, setUserData] = useState();

    // State to track editable fields
    const [editableFields, setEditableFields] = useState({
        userName: false,
        email: false,
        address: false,
        phoneNumber: false
    });

    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [userError, setUserError] = useState('');
    const [addressError, setAddressError] = useState('');
   
    // Function to toggle edit mode for a field
    const toggleEditMode = (field) => {
        setEditableFields(prevState => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    }

    // Function to handle changes to input fields
    const handleChange = (e, field) => {
        if (field === "email") {
            var emailValid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            if (!emailValid.test(e.target.value)) {
                console.log("Email Error");
                setEmailError('Invalid email address');
            } else {
                console.log("Email Okay");
                setEmailError('');
            }
            setUserData(prevState => ({
                ...prevState,
                [field]: e.target.value
            }));
        } else if (field === "phoneNumber") {
            console.log(field + " " + e.target.value);
            var phoneValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if (!phoneValid.test(e.target.value)) {
                console.log("Phone Error");
                setPhoneError('Invalid Phone Number');
            } else {
                console.log("Phone Okay");
                setPhoneError('');
            }
            setUserData(prevState => ({
                ...prevState,
                [field]: e.target.value
            }));
        } else if (field === "userName") {
            console.log(field + " " + e.target.value);
            if (!(e.target.value)) {
                console.log("User Error");
                setUserError('Invalid UserName');
            } else {
                console.log("User Okay");
                setUserError('');
            }
            setUserData(prevState => ({
                ...prevState,
                [field]: e.target.value
            }));
        } else if (field === "address") {
            console.log(field + " " + e.target.value);
            if (!(e.target.value)) {
                console.log("Address Error");
                setAddressError('Invalid Address');
            } else {
                console.log("Address Okay");
                setAddressError('');
            }
            setUserData(prevState => ({
                ...prevState,
                [field]: e.target.value
            }));
        } else {
            console.log(field);
            setUserData(prevState => ({
                ...prevState,
                [field]: e.target.value
            }));
        }
    }

    // Function to handle saving changes
    const handleSave = (field) => {
        toggleEditMode(field); // Disable edit mode
        // Perform any save/update logic here
    }

    // Function to handle form submission
    const handleSubmit = () => {
        // Perform form submission logic here
        setEditableFields({
            userName: false,
            email: false,
            phoneNumber: false,
            address: false
        });
        alert(`Changes submitted successfully! \n New user Data: \n${JSON.stringify(userData, null, 2)}`);

    }

    return (
        <>
        { isLoading &&
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
                        {userError && <p className='error-message'>{userError}</p>}
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
                        {emailError && <p className='error-message'>{emailError}</p>}
                    </div>
                    <div className="field">
                        <label>Phone number</label>
                        <div className="input-container">
                            <input
                                className='profileInput'
                                type='text'
                                value={userData.phoneNumber}
                                onChange={(e) => handleChange(e, 'phoneNumber')}
                                disabled={!editableFields.phoneNumber}
                                maxLength={12}
                            />
                            <span className='editIcon'>
                                {editableFields.phoneNumber ? (
                                    <FontAwesomeIcon icon={faSquareCheck} onClick={() => handleSave('phoneNumber')} />
                                ) : (
                                    <FontAwesomeIcon icon={faEdit} onClick={() => toggleEditMode('phoneNumber')} />
                                )}
                            </span>
                        </div>
                        {phoneError && <p className='error-message'>{phoneError}</p>}
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
                        {addressError && <p className='error-message'>{addressError}</p>}
                    </div>
                    {/* Repeat similar structure for other fields */}
                    <button className="submit-button" onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faSave} /> Save Changes
                    </button>
                </div>
            </div>
        </div>}
        </>
    );
}

export default Profile;