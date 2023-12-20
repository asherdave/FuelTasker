import React, { useState, useEffect } from "react";
import "./viewprofile.css";
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
import viewprofile from './images/viewprofile.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const ViewProfile = () => {
    const navigate = useNavigate(); // Instantiate the navigate function
    const [userData, setUserData] = useState({}); // State to hold user data

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
        navigate("/logout"); // Navigate to the upcoming page
    };

    // Function to fetch user data
    const fetchUserData = async () => {
        try {
            const response = await fetch("http://localhost:8080/fueltasker/getAllUsers");
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

    return (
        <div className="view-profile">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">{userData.fName}</div>
                    <div className="group">
                        <button className="overlap-group">
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
                        <img className="gaspr" alt="Gaspr" src={gasprice} />
                    </button>
                    <button className="group-5" onClick={handleMonthlyExpensesClick}>
                        <div className="text-wrapper-6">Monthly Expenses</div>
                        <img className="img" alt="Monthly" src={monthly} />
                    </button>
                    <button className="group-6" onClick={handleToDoListClick}>
                        <div className="text-wrapper-7">To-Do-List</div>
                        <img className="todolist" alt="Todolist" src={todolist} />
                    </button>
                    <button className="group-7" onClick={handleGasConsumptionClick}>
                        <div className="text-wrapper-8">Gas Consumption</div>
                        <img className="img-1" alt="Gascon" src={gascon} />
                    </button>
                    <button className="group-8" onClick={handleReminderClick}>
                        <div className="text-wrapper-5">Reminder</div>
                        <img className="img-2" alt="Reminder" src={reminder} />
                    </button>
                    <button className="group-9" onClick={handleTimelineClick}>
                        <div className="text-wrapper-9">Timeline</div>
                        <img className="timeline" alt="Timeline" src={timeline} />
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
                <div className="overlap-wrapper">
                    <div className="overlap-3">
                        <img className="profile-2" alt="Profile" src={profile} />
                        <img className="fuelframe" alt="Fuelframe" src={fuelframe} />
                    </div>
                </div>
                <p className="user-profile">
                    <span className="span">User </span>
                    <span className="text-wrapper-11">Profile</span>
                </p>
                <div className="overlap-group-wrapper">
                    <button className="div-wrapper" onClick={handleEditProfileClick}>
                        <div className="text-wrapper-12">Edit User Details</div>
                    </button>
                </div>
                <div className="group-10">
                    <button className="div-wrapper">
                        <div className="text-wrapper-13">Change Password</div>
                    </button>
                </div>
                <div className="text-wrapper-14">First Name:</div>
                <div className="text-wrapper-15">Last Name:</div>
                <div className="text-wrapper-16">Date of Birth:</div>
                <div className="text-wrapper-17">Email:</div>
                <div className="text-wrapper-18">Contact Number:</div>

                <div class="overlap-4">{userData.fName}</div>
            <div class="overlap-5">{userData.lName}</div>
            <div class="overlap-6">{userData.dateOfBirth}</div>
            <div class="overlap-7">{userData.eMail}</div>
            <div class="overlap-8">{userData.phonenumber}</div>

            </div>
        </div>
    );
};
