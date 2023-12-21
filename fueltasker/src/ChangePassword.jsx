import React from "react";
import "./ChangePassword.css";
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
import viewprofile from './images/viewprofile.png';
import trashw1 from './images/trashw1.png';
import savew1 from './images/savew1.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const ChangePassword = () => {

    const navigate = useNavigate(); // Instantiate the navigate function

    const handleEditProfileClick = () => {
        navigate("/editprofile"); // Navigate to the edit profile page
    };

    const handleDashboardClick = () => {
        navigate("/dashboard"); // Navigate to the upcoming page
    };

    const handleGasPricesClick = () => {
        navigate("/gasprices"); // Navigate to the upcoming page
    };

    const handleMonthlyExpensesClick = () => {
        navigate("/monthly-expenses"); // Navigate to the upcoming page
    };

    const handleToDoListClick = () => {
        navigate("/todolist"); // Navigate to the upcoming page
    };

    const handleGasConsumptionClick = () => {
        navigate("/gas-consumption"); // Navigate to the upcoming page
    };

    const handleReminderClick = () => {
        navigate("/reminder"); // Navigate to the upcoming page
    };

    const handleTimelineClick = () => {
        navigate("/timeline"); // Navigate to the upcoming page
    };

    const handleLogoutClick = () => {
        navigate("/login"); // Navigate to the upcoming page
    };

    const handleChangePassClick = () => {
        navigate("/changepassword"); // Navigate to the upcoming page
    };

    const handleviewprofileClick = () => {
        navigate("/viewprofile"); // Navigate to the upcoming page
    };

    return (
        <div className="change-password">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">John Doe</div>
                    <div className="group">
                        <button className="overlap-group" onClick={handleviewprofileClick}>
                            <div className="text-wrapper-2">View Profile</div>
                        </button>
                    </div>
                    <img className="ellipse" alt="Ellipse" src={profile} />
                    <button className="group-2" onClick={handleLogoutClick}>
                        <div className="text-wrapper-3">Logout</div>
                        <img className="img-logout" alt="Logout" src={logout} />
                    </button>
                    <button className="group-3" onClick={handleDashboardClick}>
                        <div className="text-wrapper-4">Dashboard</div>
                        <img className="dash" alt="Dash" src={dashboard} />
                    </button>
                    <button className="group-4" onClick={handleGasPricesClick}>
                        <div className="text-wrapper-5">Gas Prices</div>
                        <img className="img-2" alt="Gaspr" src={gasprice} />
                    </button>
                    <button className="group-5" onClick={handleMonthlyExpensesClick}>
                        <div className="text-wrapper-6">Monthly Expenses</div>
                        <img className="img" alt="Monthly" src={monthly}/>
                    </button>
                    <button className="group-6" onClick={handleToDoListClick}>
                        <div className="text-wrapper-7">To-Do-List</div>
                        <img className="todolist" alt="Todolist" src={todolist} />
                    </button>
                    <button className="group-7" onClick={handleGasConsumptionClick}>
                        <div className="text-wrapper-8">Gas Consumption</div>
                        <img className="img-3" alt="Gascon" src={gascon} />
                    </button>
                    <button className="group-8" onClick={handleReminderClick}>
                        <div className="text-wrapper-5">Reminder</div>
                        <img className="img-3" alt="Reminder" src={reminder}/>
                    </button>
                    <button className="group-9" onClick={handleTimelineClick}>
                        <div className="text-wrapper-9">Timeline</div>
                        <img className="timeline" alt="Timeline" src= {timeline} />
                    </button>
                </div>
                <div className="overlap-2">
                    <p className="profile">
                        <span className="span">Pro</span>
                        <span className="text-wrapper-10">file</span>
                    </p>
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                    <img className="use" alt="Use" src={viewprofile} />
                </div>
                <p className="p">
                    <span className="span">Change </span>
                    <span className="text-wrapper-10">Password</span>
                </p>
                <button className="group-wrapper">
                    <div className="group-10" onClick={handleviewprofileClick}>
                        <div className="text-wrapper-11">Cancel</div>
                        <img className="trash" alt="Trash" src={trashw1}/>
                    </div>
                </button>
                <button className="div-wrapper" onClick={handleviewprofileClick}>
                    <div className="group-11">
                        <div className="text-wrapper-12">Save</div>
                        <img className="img-save" alt="Save" src={savew1} />
                    </div>
                </button>
                <div className="group-12">
                    <div className="text-wrapper-13">Current Password:</div>
                    <div className="text-wrapper-14">New Password:</div>
                    <div className="text-wrapper-15">Confirm Password:</div>

                <input className="rectangle" type="text"/>
                <input className="rectangle-2" type="text"/>
                <input className="rectangle-3" type="text"/>
                </div>
            </div>
        </div>
    );
};
