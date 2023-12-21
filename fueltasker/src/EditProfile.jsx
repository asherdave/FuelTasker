import React, { useState, useEffect } from "react";
import "./EditProfile.css";
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
import trashw1 from './images/trashw1.png';
import savew1 from './images/savew1.png';
import { useNavigate } from 'react-router-dom';


export const EditProfile = () => {

    const navigate = useNavigate();

    const handleLogoutClick = () => {
        navigate('/login'); // Replace '/login' with your login route path
        console.log("Logout button clicked, redirecting to login");
    };

    const handleviewprofileClick = () => {
        navigate('/viewprofile'); // Replace '/login' with your login route path
        console.log("redirect to viewprofile");
    };

    const handleReminderClick = () => {
        navigate('/reminder'); 
    };

    const handleGasPricesClick = () => {
        navigate('/gasprices'); 
    };

    const handleMonthlyExpensesClick = () => {
        navigate('/monthly-expenses'); 
    };

    const handleToDoListClick = () => {
        navigate('/todolist'); 
    };

    const handleGasConsumptionClick = () => {
        navigate('/gas-consumption'); 
    };

    const handleTimelineClick = () => {
        navigate('/timeline'); 
    };

    const handleDashboardClick = () => {
        navigate('/dashboard'); 
    };

    const [userData, setUserData] = useState({
        fname: '',
        lname: '',
        dateOfBirth: '',
        email: '',
        phoneNumber: ''
    });

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const validateInputs = () => {
        // Basic validation checks
        const { fname, lname, dateOfBirth, email, phoneNumber } = userData;
        if (!fname || !lname || !dateOfBirth || !email || !phoneNumber) {
            console.error("All fields are required.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateInputs()) {
            return;
        }
        const email = userData.email;
        if (!email) {
            console.error("Email is required for updating profile.");
            return;
        }

        console.log('Sending data:', JSON.stringify(userData));  // Log the data being sent
        
        try {
            const response = await fetch(`http://localhost:8080/fueltasker/updateUser?email=${email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Handle success response
        } catch (error) {
            console.error('Error updating data: ', error);
        }
    };

    return (
        
        <div className="edit-profile">
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
                        <img className="img-logout" alt="Logout" src={logout}/>
                    </button>
                    <button className="group-3" onClick={handleDashboardClick}>
                        <div className="text-wrapper-4">Dashboard</div>
                        <img className="dash" alt="Dash" src={dashboard} />
                    </button>
                    <button className="group-4"onClick={handleGasPricesClick}>
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
                        <img className="img-2" alt="Gascon" src={gascon}/>
                    </button>
                    <button className="group-8" onClick={handleReminderClick}>
                        <div className="text-wrapper-5">Reminder</div>
                        <img className="img-3" alt="Reminder" src={reminder} />
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
                <p className="p">
                    <span className="span">Edit </span>
                    <span className="text-wrapper-11">Profile</span>
                </p>
                <div className="overlap-group-wrapper">
                    <button className="div-wrapper">
                        <div className="text-wrapper-12">Upload Photo</div>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="text-wrapper-13">First Name:</div>
                    <input 
                        className="rectangle" 
                        type="text" 
                        name="fname"
                        value={userData.fname} 
                        onChange={handleInputChange} 
                    />

                    <div className="text-wrapper-14">Last Name:</div>
                    <input 
                        className="rectangle-2" 
                        type="text" 
                        name="lname"
                        value={userData.lname} 
                        onChange={handleInputChange} 
                    />

                    <div className="text-wrapper-15">Date of Birth:</div>
                    <input 
                        className="rectangle-3" 
                        type="text" 
                        name="dateOfBirth"
                        value={userData.dateOfBirth} 
                        onChange={handleInputChange} 
                    />

                    <div className="text-wrapper-16">Email:</div>
                    <input 
                        className="rectangle-4" 
                        type="text" 
                        name="email"
                        value={userData.email} 
                        onChange={handleInputChange} 
                    />

                    <div className="text-wrapper-17">Contact Number:</div>
                    <input 
                        className="rectangle-5" 
                        type="text" 
                        name="phoneNumber"
                        value={userData.phoneNumber} 
                        onChange={handleInputChange} 
                    />

                
                <button type="submit" className="group-11">
                        <div className="group-12" onClick={handleviewprofileClick}>
                            <div className="text-wrapper-19">Save</div>
                            <img className="img-save" alt="Save" src={savew1} />
                        </div>
                    </button>
                </form>
                <button className="group-wrapper" onClick={handleviewprofileClick}>
                    <div className="group-10">
                        <div className="text-wrapper-18">Cancel</div>
                        <img className="trash" alt="Trash" src={trashw1} />
                    </div>
                </button>
            </div>
        </div>
    );
};
