import React from "react";
import "./Maintenance-AddData.css";
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
import trashw1 from './images/trashw1.png';
import savew1 from './images/savew1.png';
import { useNavigate } from 'react-router-dom';

export const MaintenanceData = () => {
    const navigate = useNavigate();

    const handleDashboardClick = () => {
        navigate('/dashboard'); 
    };

    return (
        <div className="maintenance-data">
            <div className="div">
                <div className="overlap">
                    <div className="group">
                        <p className="monthly-expenses">
                            <span className="text-wrapper1">Monthly </span>
                            <span className="span">Expenses</span>
                        </p>
                    </div>
                    <img className="monthly" alt="Monthly" src={monthly} />
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                </div>
                <div className="overlap-group">
                    <div className="text-wrapper-2">John Doe</div>
                    <div className="overlap-group-wrapper">
                        <button className="div-wrapper">
                            <div className="text-wrapper-3">View Profile</div>
                        </button>
                    </div>
                    <img className="ellipse" alt="Ellipse" src={profile} />
                    <button className="group-2">
                        <div className="text-wrapper-4">Logout</div>
                        <img className="img-logout" alt="Logout" src={logout} />
                    </button>
                    <button className="group-3"onClick={handleDashboardClick}>
                        <div className="text-wrapper-5">Dashboard</div>
                        <img className="dash" alt="Dash" src={dashboard} />
                    </button>
                    <button className="group-4">
                        <div className="text-wrapper-6">Gas Prices</div>
                        <img className="img-2-gaspr" alt="Gaspr" src={gasprice} />
                    </button>
                    <button className="group-5">
                        <div className="text-wrapper-7">Monthly Expenses</div>
                        <img className="img" alt="Monthly" src={monthly} />
                    </button>
                    <button className="group-6">
                        <div className="text-wrapper-8">To-Do-List</div>
                        <img className="todolist" alt="Todolist" src={todolist}/>
                    </button>
                    <button className="group-7">
                        <div className="text-wrapper-9">Gas Consumption</div>
                        <img className="img-3" alt="Gascon" src={gascon} />
                    </button>
                    <button className="group-8">
                        <div className="text-wrapper-6">Reminder</div>
                        <img className="img-3" alt="Reminder" src={reminder} />
                    </button>
                    <button className="group-9">
                        <div className="text-wrapper-10">Timeline</div>
                        <img className="timeline" alt="Timeline" src={timeline}/>
                    </button>
                </div>
                <div className="text-wrapper-11">Maintenance</div>
                <div className="group-10">
                    <div className="text-wrapper-12">Date:</div>
                    <div className="text-wrapper-13">Title:</div>
                    <div className="text-wrapper-14">Price:</div>
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                    <div className="rectangle-3" />
                </div>
                <button className="group-wrapper">
                    <div className="group-11">
                        <div className="text-wrapper-15">Cancel</div>
                        <img className="trash" alt="Trash" src={trashw1} />
                    </div>
                </button>
                <button className="group-12">
                    <div className="group-13">
                        <div className="text-wrapper-16">Save</div>
                        <img className="img-2" alt="Save" src={savew1} />
                    </div>
                </button>
            </div>
        </div>
    );
};
