import React, { useState, useEffect } from "react";
import './Reminder.css';
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
import { useNavigate } from 'react-router-dom'; // Import useNavigate


export const Reminder = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({}); // State to hold user data

// Function to fetch user data
const fetchUserData = async () => {
    try {
        const response = await fetch("http://localhost:8080/user/getAllUsers");
        const users = await response.json();
        if (users.length > 0) {
            setUserData(users[0]); // Assuming you want to display the first user's data
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};

// useEffect to call fetchUserData when the component mounts
useEffect(() => {
    fetchUserData();
}, []);

    const handleCreateReminderClick = () => {
        navigate("/CreateReminder"); // Navigate to the create reminder page
    };

    const handleUpcomingViewClick = () => {
        navigate("/upcomingview"); // Navigate to the upcoming page
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

    const handleViewProfileClick = () => {
        navigate('/viewprofile'); 
    };

    const handleLogoutClick = () => {
        navigate('/login'); // Replace '/login' with your login route path
        console.log("Logout button clicked, redirecting to login");
    };

    return (
        <div className="reminder">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">{userData.fName}</div>
                    <div className="group">
                        <button className="overlap-group" onClick={handleViewProfileClick}>
                            <div className="text-wrapper-2">View Profile</div>
                        </button>
                    </div>
                    <img className="ellipse" alt="Ellipse" src={profile} />
                    <button className="group-2" onClick={handleLogoutClick}>
                        <div className="text-wrapper-3">Logout</div>
                        <img className="img-logout" alt="Logout" src={logout} />
                    </button>
                    <div className="group-wrapper" onClick={handleReminderClick}>
                        <button className="group-3">
                            <div className="text-wrapper-4">Reminder</div>
                            <img className="img-2" alt="Reminder" src={reminder} />
                        </button>
                    </div>
                    <button className="group-4" onClick={handleDashboardClick}>
                        <div className="text-wrapper-5">Dashboard</div>
                        <div className="dash-wrapper">
                            <img className="dash" alt="dash" src={dashboard} />
                        </div>
                    </button>
                    <button className="group-5" onClick={handleGasPricesClick}>
                        <div className="text-wrapper-4">Gas Prices</div>
                        <img className="gaspr" alt="Gaspr" src={gasprice} />
                    </button>
                    <button className="group-6" onClick={handleMonthlyExpensesClick}>
                        <div className="text-wrapper-6">Monthly Expenses</div>
                        <img className="img" alt="Monthly" src={monthly} />
                    </button>
                    <button className="group-7" onClick={handleToDoListClick}>
                        <div className="text-wrapper-7">To-Do-List</div>
                        <img className="todolist" alt="Todolist" src={todolist} />
                    </button>
                    <button className="group-8" onClick={handleGasConsumptionClick}>
                        <div className="text-wrapper-8">Gas Consumption</div>
                        <img className="img-2" alt="Gascon" src={gascon} />
                    </button>
                    <button className="group-9" onClick={handleTimelineClick}>
                        <div className="text-wrapper-9">Timeline</div>
                        <img className="timeline" alt="Timeline" src={timeline} />
                    </button>
                </div>
                <div className="overlap-2">
                    <img className="img-3" alt="Reminder" src={reminder} />
                    <div className="reminder-wrapper">
                        <p className="p">
                            <span className="span">Re</span>
                            <span className="text-wrapper-10">minder</span>
                        </p>
                    </div>
                    <img className="landscape" alt="Landscape" src={landscape} />
                </div>
                <div className="div-wrapper">
                    <button className="group-10" onClick={handleCreateReminderClick}>
                        <div className="group-11" />
                        <div className="text-wrapper-11">CREATE REMINDER</div>
                    </button>
                </div>
                <div className="overlap-wrapper">
                    <button className="overlap-3" onClick={handleUpcomingViewClick}>
                        <div className="group-12" />
                        <div className="text-wrapper-12">VIEW REMINDER</div>
                    </button>
                </div>
            </div>
        </div>
    );
};
