import React from "react";
import "./Pastview.css";
import logout from './images/logout.png';
import profile from './images/profile.png';
import dashboard from './images/dashboard.png';
import gasprice from './images/gasprices.png';
import monthly from './images/monthlyexpenses.png';
import todolist from './images/todolist.png';
import gascon from './images/gasconsumption.png';
import reminder from './images/reminder.png';
import timeline from './images/timeline.png';
import landscape from './images/landscape.png';
import rect99 from './images/rect99.png';
import check1 from './images/check1.png';
import check2 from './images/check2.png';
import check3 from './images/check3.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const PastView = () => {
    const navigate = useNavigate(); // Instantiate the navigate function

    const handleUpcomingViewClick = () => {
        navigate("/UpcomingView"); // Navigate to the upcoming reminder page
    };

    const handleReminderClick = () => {
        navigate("/Reminder"); // Navigate to the upcoming reminder page
    };

    return (
        <div className="past-view">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">John Doe</div>
                    <div className="group">
                        <button className="overlap-group">
                            <div className="text-wrapper-2">View Profile</div>
                        </button>
                    </div>
                    <img className="ellipse" alt="Ellipse" src={profile} />
                    <button className="group-2">
                        <div className="text-wrapper-3">Logout</div>
                        <img className="img-logout" alt="Logout" src={logout} />
                    </button>
                    <button className="group-3">
                        <div className="text-wrapper-4">Dashboard</div>
                        <div className="dash-wrapper">
                            <img className="dash" alt="Dash" src={dashboard} />
                        </div>
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
                        <img className="img-2" alt="Gascon" src={gascon} />
                    </button>
                    <button className="group-8" onClick={handleReminderClick}>
                        <div className="text-wrapper-5">Reminder</div>
                        <img className="img-2" alt="Reminder" src={reminder} />
                    </button>
                    <button className="group-9">
                        <div className="text-wrapper-9">Timeline</div>
                        <img className="timeline" alt="Timeline" src={timeline} />
                    </button>
                </div>
                <div className="overlap-2">
                    <img className="reminder" alt="Reminder" src={reminder} />
                    <img className="rectangle" alt="Rectangle" src={rect99} />
                    <div className="reminder-wrapper">
                        <p className="p">
                            <span className="span">Re</span>
                            <span className="text-wrapper-10">minder</span>
                        </p>
                    </div>
                    <img className="landscape" alt="Landscape" src={landscape} />
                </div>
                <p className="view-reminder">
                    <span className="span">View </span>
                    <span className="text-wrapper-11">Reminder</span>
                </p>
                <div className="overlap-3">
                    <button className="rectangle-3" onClick={handleUpcomingViewClick}/>
                    <div className="text-wrapper-12">UPCOMING</div>
                    <div className="overlap-wrapper">
                        <button className="div-wrapper">
                            <div className="text-wrapper-13">PAST</div>
                        </button>
                    </div>
                </div>
                <div className="overlap-group-wrapper">
                    <div className="overlap-4">
                        <img className="check1" alt="check1" src={check1} />
                        <div className="text-wrapper-14">2:00 PM 11/25/2023</div>
                        <div className="text-wrapper-15">CHANGE OIL</div>
                    </div>
                </div>
                <div className="group-10">
                    <div className="overlap-4">
                        <img className="check2" alt="check2" src={check2} />
                        <div className="text-wrapper-16">2:00 PM 11/28/2023</div>
                        <div className="text-wrapper-17">CHANGE OIL</div>
                    </div>
                </div>
                <div className="group-11">
                    <div className="overlap-5">
                        <div className="ASDASF-wrapper">
                            <img className="check3" alt="check3" src={check3} />
                        </div>
                        <div className="text-wrapper-18">2:00 PM 12/01/2023</div>
                        <div className="text-wrapper-19">WASH CAR</div>
                    </div>
                </div>
                <div className="group-12">
                    <div className="overlap-5">    
                    </div>
                </div>
            </div>
        </div>
    );
};