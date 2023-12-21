import React, { useState, useEffect } from 'react';
import "./Register.css";
import registerImage from './images/register.png';
import login from './images/login1.png';
import sidelogo from './images/sidelogo.png';
import fulllogo from './images/fulllogo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {

    useEffect(() => {
        document.title = 'Register';
      }, []);


    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        fName: '',
        lName: '',
        eMail: '',
        pWord: ''
    });
    const [confirmPWord, setConfirmPWord] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
        if (errorMessage) setErrorMessage('');
    };

    const handleConfirmPWordChange = (event) => {
        setConfirmPWord(event.target.value);
        if (errorMessage) setErrorMessage('');
    };

    const isPasswordValid = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        return regex.test(password);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        if (!userData.fName || !userData.lName || !userData.eMail || !userData.pWord || !confirmPWord) {
            setErrorMessage('All fields must be filled');
            return;
        }

        if (!isPasswordValid(userData.pWord)) {
            setErrorMessage('Password must be at least 8 characters long, include upper and lower case letters, and contain at least one special character');
            return;
        }

        if (userData.pWord !== confirmPWord) {
            setErrorMessage('Passwords do not match');
            return;
        }

        console.log("Submitting user data:", userData);
        try {
            const response = await axios.post('http://localhost:8080/user/insertUser', userData);
            console.log("Response received:", response.data);
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    const handleHomeClick = () => {
        navigate('/');
        console.log("Home button clicked");
    };

    const handleLoginRedirect = () => {
        navigate('/login');
        console.log("Redirect to login");
    };

    const handleAboutUsRedirect = () => {
        navigate('/aboutus');
        console.log("About Us button clicked");
    };

    return (
        <div className="register">
            <div className="div">
                <div className="overlap">
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                    <button className="text-wrapper" onClick={handleHomeClick}>Home</button>
                    <button className="text-wrapper-2" onClick={handleAboutUsRedirect}>About Us</button>
                    <button className="group">
                        <div className="group-2">
                            <div className="text-wrapper-3">Register</div>
                            <img className="img" alt="Register" src={registerImage} />
                        </div>
                    </button>
                    <div className="overlap-group-wrapper">
                        <button className="overlap-group" onClick={handleLoginRedirect}>
                            <img className="login" alt="Login" src={login} />
                            <div className="text-wrapper-4">Login</div>
                        </button>
                    </div>
                </div>
                <div className="overlap-2">
                    <img
                        className="black-red-modern-car"
                        alt="Black red modern car"
                        src={fulllogo}
                    />
                    <p className="REGISTER-ACCOUNT">
                        <span className="span">REGISTER </span>
                        <span className="text-wrapper-5">ACCOUNT</span>
                    </p>

                    {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}

                    <form onSubmit={handleRegister} className="overlap-3">
                        <div className="rectangle" />
                        <div className="overlap-wrapper">
                            <input type="text" name="fName" className="div-wrapper" placeholder="First Name" onChange={handleInputChange}/>
                        </div>
                        <div className="group-3">
                            <input type="text" name="lName" className="div-wrapper" placeholder="Last Name" onChange={handleInputChange}/>
                        </div>
                        <div className="group-4">
                            <input type="text" name="eMail" className="div-wrapper" placeholder="E-Mail" onChange={handleInputChange}/>
                        </div>
                        <div className="group-5">
                            <input type="password" name="pWord" className="div-wrapper" placeholder="Password" onChange={handleInputChange}/>
                        </div>
                        <div className="group-6">
                            <input type="password" className="div-wrapper" placeholder="Confirm Password" onChange={handleConfirmPWordChange}/>
                        </div>
                        <div className="group-7">
                            <button className="overlap-4" type="button" onClick={handleLoginRedirect}>
                                <div className="rectangle-2" />
                                <div className="text-wrapper-11">Cancel</div>
                            </button>
                        </div>
                        <div className="group-8">
                            <button className="overlap-4" type="submit">
                                <div className="rectangle-3" />
                                <div className="text-wrapper-12">Register</div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
