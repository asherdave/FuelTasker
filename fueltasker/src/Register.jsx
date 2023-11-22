import React from "react";
import "./Register.css";
import registerImage from './images/register.png';
import login from './images/login1.png';
import sidelogo from './images/sidelogo.png';
import fulllogo from './images/fulllogo.png';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
        console.log("Home button clicked");
    };

    const handleLoginRedirect = () => {
        navigate('/login');
        console.log("Redirect to login");
    };

    return (
        <div className="register">
            <div className="div">
                <div className="overlap">
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                    <button className="text-wrapper" onClick={handleHomeClick}>Home</button>
                    <button className="text-wrapper-2">About Us</button>
                    <button className="group">
                        <div className="group-2">
                            <div className="text-wrapper-3">Register</div>
                            <img className="img" alt="Register" src={registerImage} />
                        </div>
                    </button>
                    <div className="overlap-group-wrapper">
                        <button className="overlap-group"onClick={handleLoginRedirect}>
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
                    <div className="overlap-3">
                        <div className="rectangle" />
                        <div className="overlap-wrapper">
                        <input type="text" className="div-wrapper" placeholder="First Name" />

                        </div>
                        <div className="group-3">
                        <input type="text" className="div-wrapper" placeholder="Last Name" />
                        </div>
                        <div className="group-4">
                        <input type="text" className="div-wrapper" placeholder="E-Mail" />
                        </div>
                        <div className="group-5">
                        <input type="text" className="div-wrapper" placeholder="Password" />
                        </div>
                        <div className="group-6">
                        <input type="text" className="div-wrapper" placeholder="Confirm Password" />
                        </div>
                        <div className="group-7">
                            <button className="overlap-4" onClick={handleLoginRedirect}>
                                <div className="rectangle-2" />
                                <div className="text-wrapper-11">Cancel</div>
                            </button>
                        </div>
                        <div className="group-8">
                            <button className="overlap-4" onClick={handleLoginRedirect}>
                                <div className="rectangle-3" />
                                <div className="text-wrapper-12">Register</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
