import React from "react";
import "./AboutUs.css";
import registerImage from './images/register.png';
import login from './images/login1.png';
import sidelogo from './images/sidelogo.png';
import fblogo from './images/fb.png';
import fuelframe from './images/fuelframe.png';
import asher from './images/asher.png';
import kade from './images/kade.png';
import vincent from './images/vincent.png';
import emmarson from './images/emmarson.png';


export const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="div">
                <div className="overlap">
                    <div className="group">
                        <div className="overlap-group">
                            <img className="element" alt="Element" src={asher} />
                            <img className="fuelframe" alt="Fuelframe" src={fuelframe} />
                        </div>
                    </div>
                    <div className="overlap-wrapper">
                        <div className="overlap-group">
                            <img className="img" alt="Element" src={kade} />
                            <img className="fuelframe" alt="Fuelframe" src={fuelframe} />
                        </div>
                    </div>
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group">
                            <img className="element-2" alt="Element" src={vincent} />
                            <img className="fuelframe" alt="Fuelframe" src={fuelframe} />
                        </div>
                    </div>
                    <div className="div-wrapper">
                        <div className="overlap-group">
                            <img className="element-3" alt="Element" src={emmarson} />
                            <img className="fuelframe" alt="Fuelframe" src={fuelframe} />
                        </div>
                    </div>
                    <img className="fb" alt="Fb" src={fblogo} />
                    <img className="fb-2" alt="Fb" src={fblogo} />
                    <img className="fb-3" alt="Fb" src={fblogo} />
                    <img className="fb-4" alt="Fb" src={fblogo} />
                    <div className="text-wrapper">Asher Dave Sumalpong</div>
                    <div className="text-wrapper-2">Emmarson Gonzaga</div>
                    <div className="text-wrapper-3">Kade Sanico</div>
                    <div className="text-wrapper-4">Vincent Dalan</div>
                    <p className="meet-the-DEVELOPERS">
                        <span className="span">Meet the </span>
                        <span className="text-wrapper-5">DEVELOPERS</span>
                    </p>
                </div>
                <div className="overlap-2">
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                    <div className="text-wrapper-6">Home</div>
                    <div className="text-wrapper-7">About Us</div>
                    <div className="group-wrapper">
                        <div className="group-2">
                            <div className="text-wrapper-8">Register</div>
                            <img className="register" alt="Register" src={registerImage} />
                        </div>
                    </div>
                    <div className="group-3">
                        <div className="overlap-group-2">
                            <img className="login" alt="Login" src={login} />
                            <div className="text-wrapper-9">Login</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
