import React from "react";
import "./Dashboard.css";
import sidelogo from './images/sidelogo.png';
import profile from './images/profile.png';
import logout from './images/logout.png';
import dashboard from './images/dashboard.png';
import gasprice from './images/gasprices.png';
import monthly from './images/monthlyexpenses.png';
import todolist from './images/todolist.png';
import gascon from './images/gasconsumption.png';
import reminder from './images/reminder.png';
import timeline from './images/timeline.png';
import trash from './images/trash.png';
import circle from './images/circle.png';
import uprem from './images/upcomingreminder.png';
import react131 from './images/rect131.png';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogoutClick = () => {
        navigate('/login'); // Replace '/login' with your login route path
        console.log("Logout button clicked, redirecting to login");
    };

    return (
        <div className="dashboard">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">John Doe</div>
                    <div className="group">
                        <button className="overlap-group">
                            <div className="text-wrapper-2">View Profile</div>
                        </button>
                    </div>
                    <img className="ellipse" alt="Ellipse" src={profile} />
                    <button className="group-2"onClick={handleLogoutClick}>
                        <div className="text-wrapper-3">Logout</div>
                        <img className="img-logout" alt="Logout" src={logout} />
                    </button>
                    <button className="group-3">
                        <div className="text-wrapper-4">Dashboard</div>
                        <img className="dash" alt="Dash" src={dashboard} />
                    </button>
                    <button className="group-4">
                        <div className="text-wrapper-5">Gas Prices</div>
                        <img className="gaspr" alt="Gaspr" src={gasprice} />
                    </button>
                    <button className="group-5">
                        <div className="text-wrapper-6">Monthly Expenses</div>
                        <img className="img" alt="Monthly" src={monthly} />
                    </button>
                    <button className="group-6">
                        <div className="text-wrapper-7">To-Do-List</div>
                        <img className="todolist" alt="Todolist" src={todolist} />
                    </button>
                    <button className="group-7">
                        <div className="text-wrapper-8">Gas Consumption</div>
                        <img className="img-1" alt="Gascon" src={gascon} />
                    </button>
                    <button className="group-8">
                        <div className="text-wrapper-reminder">Reminder</div>
                        <img className="img-2" alt="Reminder" src={reminder} />
                    </button>
                    <button className="group-9">
                        <div className="text-wrapper-9">Timeline</div>
                        <img className="timeline" alt="Timeline" src={timeline} />
                    </button>
                </div>
                <div className="overlap-2">
                    <img className="dash-2" alt="Dash" src={dashboard} />
                    <p className="p">
                        <span className="span">Dash</span>
                        <span className="text-wrapper-10">board</span>
                    </p>
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                </div>
                <div className="overlap-wrapper">
                    <div className="overlap-group-2">
                        <div className="rectangle-wrapper">
                            <img className="rectangle" alt="Rectangle" src={react131} />
                        </div>
                        <p className="div-2">
                            <span className="span">Gas </span>
                            <span className="text-wrapper-10">Consumption</span>
                        </p>
                        <div className="text-wrapper-11">59.19</div>
                        <div className="text-wrapper-12">KM/L</div>
                    </div>
                </div>
                <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                        <div className="rectangle-wrapper">
                            <img className="rectangle" alt="Rectangle" src={react131} />
                        </div>
                        <p className="div-2">
                            <span className="span">Monthly</span>
                            <span className="text-wrapper-10"> Expenses</span>
                        </p>
                        <div className="text-wrapper-13">763,039.00</div>
                        <div className="text-wrapper-14">PHP</div>
                    </div>
                </div>
                <div className="div-wrapper">
                    <div className="overlap-3">
                        <div className="group-10">
                            <div className="overlap-group-2">
                                <div className="rectangle-wrapper">
                                    <img className="rectangle" alt="Rectangle" src={react131} />
                                </div>
                                <p className="div-2">
                                    <span className="span">Pending </span>
                                    <span className="text-wrapper-10">Task</span>
                                </p>
                            </div>
                        </div>
                        <div className="group-11">
                            <div className="overlap-4">
                                <div className="group-12">
                                    <div className="overlap-group-3">
                                        <div className="ellipse-wrapper">
                                            <img className="ellipse-2" alt="Ellipse" src={circle} />
                                        </div>
                                        <img className="awe" alt="Awe" src={trash} />
                                    </div>
                                </div>
                                <div className="text-wrapper-15">Change Oil</div>
                            </div>
                        </div>
                        <div className="group-13">
                            <div className="overlap-4">
                                <div className="group-12">
                                    <div className="overlap-group-3">
                                        <div className="ellipse-wrapper">
                                            <div className="ellipse-3" />
                                        </div>
                                        <img className="awe" alt="Awe" src={trash} />
                                    </div>
                                </div>
                                <div className="text-wrapper-16">Check Tire Pressure</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-14">
                    <div className="overlap-3">
                        <div className="group-10">
                            <div className="overlap-group-2">
                                <div className="rectangle-wrapper">
                                    <img className="rectangle" alt="Rectangle" src={react131} />
                                </div>
                                <p className="div-2">
                                    <span className="span">Upcoming </span>
                                    <span className="text-wrapper-10">Reminder</span>
                                </p>
                            </div>
                        </div>
                        <div className="group-15">
                            <div className="overlap-5">
                                <img className="ASDASF" alt="Asdasf" src={uprem} />
                                <div className="text-wrapper-17">2:00 PM 11/25/2023</div>
                                <div className="text-wrapper-18">Toyota Service Maintenance</div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="hi-welcome-john-doe">
                    <span className="span">Hello, Welcome </span>
                    <span className="text-wrapper-10">John Doe</span>
                    <span className="span">!</span>
                </p>
            </div>
        </div>
    );
};
