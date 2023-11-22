import React from "react";
import "./Register.css";
import registerImage from './images/register.png';
import login from './images/login1.png';
import sidelogo from './images/sidelogo.png';
import fulllogo from './images/fulllogo.png';

export const Register = () => {
    return (
        <div className="register">
            <div className="div">
                <div className="overlap">
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                    <div className="text-wrapper">Home</div>
                    <div className="text-wrapper-2">About Us</div>
                    <div className="group">
                        <div className="group-2">
                            <div className="text-wrapper-3">Register</div>
                            <img className="img" alt="Register" src={registerImage} />
                        </div>
                    </div>
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group">
                            <img className="login" alt="Login" src={login} />
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
                    <p className="REGISTER-ACCOUNT">
                        <span className="span">REGISTER </span>
                        <span className="text-wrapper-5">ACCOUNT</span>
                    </p>
                    <div className="overlap-3">
                        <div className="rectangle" />
                        <div className="rectangle-2" />
                        <div className="rectangle-3" />
                        <div className="rectangle-4" />
                        <div className="rectangle-5" />
                        <div className="rectangle-6" />
                        <div className="text-wrapper-6">FIRST NAME</div>
                        <div className="text-wrapper-7">LAST NAME</div>
                        <div className="text-wrapper-8">E-MAIL</div>
                        <div className="text-wrapper-9">PASSWORD</div>
                        <div className="text-wrapper-10">CONFIRM PASSWORD</div>
                        <div className="rectangle-7" />
                        <div className="text-wrapper-11">Cancel</div>
                        <div className="overlap-wrapper">
                            <div className="overlap-4">
                                <div className="rectangle-8" />
                                <div className="text-wrapper-12">Register</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
