import React from "react";
import "./GasPrices.css";
import sidelogo from './images/sidelogo.png';
import fuelframe from './images/fuelframe.png';
import profile from './images/profile.png';
import logout from './images/logout.png';
import dashboard from './images/dashboard.png';
import gasprice from './images/gasprices.png';
import monthly from './images/monthlyexpenses.png';
import todolist from './images/todolist.png';
import gascon from './images/gasconsumption.png';
import reminder from './images/reminder.png';
import timeline from './images/timeline.png';
import petron from './images/petron.png';
import shell from './images/shell.png';
import seaoil from './images/seaoil.png';

export const GasPrices = () => {
    return (
        <div className="gas-prices">
            <div className="div">
                <img className="image" alt="Image" src={petron} />
                <div className="overlap">
                    <img className="gaspr" alt="Gaspr" src={gasprice} />
                    <p className="p">
                        <span className="text-wrapper">Gas </span>
                        <span className="span">Prices</span>
                    </p>
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                </div>
                <div className="overlap-group">
                    <div className="text-wrapper-2">John Doe</div>
                    <div className="group">
                        <button className="div-wrapper">
                            <div className="text-wrapper-3">View Profile</div>
                        </button>
                    </div>
                    <img className="ellipse" alt="Ellipse" src={profile} />
                    <div className="group-2">
                        <div className="text-wrapper-4">Logout</div>
                        <img className="img" alt="Logout" src={logout} />
                    </div>
                    <button className="group-3">
                        <div className="text-wrapper-5">Dashboard</div>
                        <img className="dash" alt="Dash" src={dashboard} />
                    </button>
                    <div className="group-4">
                        <div className="text-wrapper-6">Gas Prices</div>
                        <img className="gaspr-2" alt="Gaspr" src={gasprice} />
                    </div>
                    <div className="group-5">
                        <div className="text-wrapper-7">Monthly Expenses</div>
                        <img className="img" alt="Monthly" src={monthly} />
                    </div>
                    <div className="group-6">
                        <div className="text-wrapper-8">To-Do-List</div>
                        <img className="todolist" alt="Todolist" src={todolist}/>
                    </div>
                    <div className="group-7">
                        <div className="text-wrapper-9">Gas Consumption</div>
                        <img className="img-2" alt="Gascon" src={gascon} />
                    </div>
                    <div className="group-8">
                        <div className="text-wrapper-6">Reminder</div>
                        <img className="img-2" alt="Reminder" src={reminder}/>
                    </div>
                    <div className="group-9">
                        <div className="text-wrapper-10">Timeline</div>
                        <img className="timeline" alt="Timeline" src={timeline} />
                    </div>
                </div>
                <div className="group-10">
                    <div className="text-wrapper-11">Diesel</div>
                    <div className="text-wrapper-12">Regular</div>
                    <div className="text-wrapper-13">Premium</div>
                    <div className="text-wrapper-14">Blaze</div>
                    <div className="overlap-wrapper">
                        <div className="overlap-2">
                            <div className="rectangle" />
                            <div className="group-11">
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-group-2">
                                        <div className="text-wrapper-15">55.20 PHP/L</div>
                                    </div>
                                </div>
                                <div className="group-12">
                                    <div className="overlap-3">
                                        <div className="text-wrapper-16">60.43 PHP/L</div>
                                    </div>
                                </div>
                                <div className="group-13">
                                    <div className="overlap-4">
                                        <div className="text-wrapper-17">63.78 PHP/L</div>
                                    </div>
                                </div>
                                <div className="group-14">
                                    <div className="overlap-5">
                                        <div className="text-wrapper-15">72.80 PHP/L</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-15">
                    <div className="text-wrapper-18">Diesel</div>
                    <div className="text-wrapper-19">Regular</div>
                    <div className="text-wrapper-20">Premium</div>
                    <div className="text-wrapper-21">V-Power Racing</div>
                    <div className="group-16">
                        <div className="overlap-2">
                            <div className="rectangle" />
                            <div className="group-11">
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-group-2">
                                        <div className="text-wrapper-15">55.20 PHP/L</div>
                                    </div>
                                </div>
                                <div className="group-12">
                                    <div className="overlap-3">
                                        <div className="text-wrapper-15">55.20 PHP/L</div>
                                    </div>
                                </div>
                                <div className="group-13">
                                    <div className="overlap-4">
                                        <div className="text-wrapper-15">55.20 PHP/L</div>
                                    </div>
                                </div>
                                <div className="group-14">
                                    <div className="overlap-5">
                                        <div className="text-wrapper-15">55.20 PHP/L</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-17">
                    <div className="text-wrapper-22">Diesel</div>
                    <div className="text-wrapper-23">Regular</div>
                    <div className="text-wrapper-24">Premium</div>
                    <div className="group-18">
                        <div className="overlap-6">
                            <div className="rectangle-2" />
                            <div className="group-19">
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-group-2">
                                        <div className="text-wrapper-15">55.20 PHP/L</div>
                                    </div>
                                </div>
                                <div className="group-12">
                                    <div className="overlap-3">
                                        <div className="text-wrapper-15">55.20 PHP/L</div>
                                    </div>
                                </div>
                                <div className="group-13">
                                    <div className="overlap-4">
                                        <div className="text-wrapper-15">55.20 PHP/L</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="shell-logo-png" alt="Shell logo png" src={shell} />
                <img className="seaoil-logo-removebg" alt="Seaoil logo removebg" src={seaoil} />
            </div>
        </div>
    );
};
