import React from "react";
import "./Login.css";
import registerImage from './images/register.png';
import login from './images/login1.png';
import sidelogo from './images/sidelogo.png';
import fulllogo from './images/fulllogo.png';

export const Login = () => {

    return (
        <div className="login">
            <div className="div">
                <div className="overlap">
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                    <div className="text-wrapper">Home</div>
                    <div className="text-wrapper-2">About Us</div>
                    <button className="group">
                        <div className="group-2">
                            <div className="text-wrapper-3">Register</div>
                            <img className="register" alt="Register" src={registerImage} />
                        </div>
                    </button>
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group">
                            <img className="img" alt="Login" src={login} />
                            <div className="text-wrapper-4">Login</div>
                        </div>
                    </div>
                </div>
                <div className="overlap-2">
                    <img
                        className="black-red-modern-car"
                        alt="Black red modern car"
                        src={fulllogo}
                    />
                    <div className="overlap-3">
                        <div className="rectangle" />
                        <div className="rectangle-2" />
                        <div className="overlap-wrapper">
                            <button className="div-wrapper">
                                <div className="text-wrapper-5">Login</div>
                            </button>
                        </div>
                        <input type="email" className="rectangle-3" placeholder="Email" />
                        <input type="password" className="rectangle-4" placeholder="Password" />
                        <div className="group-3">
                            <button className="overlap-4">
                                <div className="rectangle-5" />
                                <div className="text-wrapper-6">Register</div>
                            </button>
                        </div>
                    </div>
                    <p className="LOG-IN">
                        <span className="span">LOG </span>
                        <span className="text-wrapper-7">IN</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
