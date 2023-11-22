import React from "react";
import "./Home.css";
import registerImage from './images/register.png'; // Adjust the path if necessary
import login from './images/login1.png';
import sidelogo from './images/sidelogo.png';
import logo from './images/logo.png';
import { useNavigate } from 'react-router-dom';

export const Homepage = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login');
        console.log("Login button clicked");
    };
    return (
        <div className="homepage">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">Home</div>
                    <div className="text-wrapper-2">About Us</div>
                    <button className="group">
                        <div className="group-2">
                            <div className="text-wrapper-3">Register</div>
                            <img className="register" alt="Register" src={registerImage} />
                        </div>
                    </button>
                    <div className="overlap-group-wrapper">
                    <button className="overlap-group" onClick={handleLoginClick}>
                            <img className="login" alt="Login" src={login} />
                            <div className="text-wrapper-4">Login</div>
                        </button>
                    </div>
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                </div>
                <div className="overlap-2">
                    <p className="welcome-to-FUEL">
                        <span className="span">Welcome to </span>
                        <span className="text-wrapper-5">FUEL </span>
                        <span className="text-wrapper-6">TASKER</span>
                    </p>
                    <img className="creative-abstract" alt="Creative abstract" src={logo} />
                    <p className="p">
                        Fuel Tasker allows drivers track fuel consumption, expenses, vehicle maintenance, fuel pricing, and more.
                        The program can be used by any driver to track fuel and other maintenance costs. Ultimately, a Fuel Tasker
                        App can help drivers to make better driving decisions.
                    </p>
                    <div className="overlap-wrapper">
                        <div className="div-wrapper" onClick={handleLoginClick}>
                            <div className="text-wrapper-7">Get Started</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
