import React, { useState } from 'react';
import "./Register.css";
import registerImage from './images/register.png';
import login from './images/login1.png';
import sidelogo from './images/sidelogo.png';
import fulllogo from './images/fulllogo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        fName: '',
        lName: '',
        eMail: '',
        pWord: ''
    });

    const handleInputChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        console.log("Submitting user data:", userData);
        try {
            const response = await axios.post('http://localhost:8080/user/insertUser', userData);
            console.log("Response received:", response.data);
            navigate('/login'); // Redirect to login page after successful registration
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
                            <input type="password" className="div-wrapper" placeholder="Confirm Password" />
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
