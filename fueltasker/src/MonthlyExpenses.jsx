import React, { useState, useEffect } from "react";
import "./MonthlyExpenses.css";
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
import fuel from './images/fuel1.png';
import tools from './images/tools.png';
import gear from './images/gear.png';
import car1 from './images/car1.png';
import viewdetails from './images/viewdetails.png';
import { useNavigate } from 'react-router-dom';


export const MonthlyExpenses = () => {
    
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

    const handleDashboardClick = () => {
        navigate('/dashboard'); 
    };

    const handleGasPricesClick = () => {
        navigate('/gasprices'); 
    };

    const handleToDoListClick = () => {
        navigate('/todolist'); 
    };

    const handleGasConsumptionClick = () => {
        navigate('/gas-consumption'); 
    };

    const handleReminderClick = () => {
        navigate('/reminder'); 
    };

    const handleTimelineClick = () => {
        navigate('/timeline'); 
    };

    const Viewdetails1 = () => {
        navigate('/carwash'); 
    };

    const Viewdetails2 = () => {
        navigate('/customization'); 
    };

    const Viewdetails3 = () => {
        navigate('/maintenance'); 
    };

    const handleViewClick = () => {
        navigate('/viewprofile'); 
    };

    const handleLoginClick = () => {
        navigate('/login'); 
    };

    return (
        <div className="monthly-expenses">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">{userData.fName}</div>
                    <div className="group"onClick={handleViewClick}>
                        <button className="overlap-group">
                            <div className="text-wrapper-2">View Profile</div>
                        </button>
                    </div>
                    <img className="ellipse" alt="Ellipse" src={profile} />
                    <button className="group-2"onClick={handleLoginClick}>
                        <div className="text-wrapper-3">Logout</div>
                        <img className="logout" alt="Logout" src={logout} />
                    </button>
                    <button className="group-3"onClick={handleDashboardClick}>
                        <div className="text-wrapper-4">Dashboard</div>
                        <img className="dash" alt="Dash" src={dashboard} />
                    </button>
                    <button className="group-4"onClick={handleGasPricesClick}>
                        <div className="text-wrapper-5">Gas Prices</div>
                        <img className="gaspr" alt="Gaspr" src={gasprice} />
                    </button>
                    <button className="group-5">
                        <div className="text-wrapper-6">Monthly Expenses</div>
                        <img className="img" alt="Monthly" src={monthly}/>
                    </button>
                    <button className="group-6"onClick={handleToDoListClick}>
                        <div className="text-wrapper-7">To-Do-List</div>
                        <img className="todolist" alt="Todolist" src={todolist}/>
                    </button>
                    <button className="group-7"onClick={handleGasConsumptionClick}>
                        <div className="text-wrapper-8">Gas Consumption</div>
                        <img className="img-2" alt="Gascon" src={gascon} />
                    </button>
                    <button className="group-8"onClick={handleReminderClick}>
                        <div className="text-wrapper-5">Reminder</div>
                        <img className="img-2" alt="Reminder" src={reminder} />
                    </button>
                    <button className="group-9"onClick={handleTimelineClick}>
                        <div className="text-wrapper-9">Timeline</div>
                        <img className="timeline" alt="Timeline" src={timeline} />
                    </button>
                </div>
                <div className="overlap-wrapper">
                    <div className="overlap-2">
                        <div className="group-10">
                            <img className="element" alt="Element" src={fuel} />
                            <div className="text-wrapper-10">Fuel</div>
                        </div>
                        <div className="text-wrapper-11">1,389.00</div>
                    </div>
                </div>
                <div className="overlap-group-wrapper">
                    <div className="overlap-3">
                        <img className="car" alt="Car" src={car1} />
                        <div className="text-wrapper-12">3,150.00</div>
                        <div className="text-wrapper-13">Car Wash</div>
                    </div>
                </div>
                <div className="div-wrapper">
                    <div className="overlap-4">
                        <img className="untitled-design" alt="Untitled design" src={tools} />
                        <div className="text-wrapper-14">Customization</div>
                        <div className="text-wrapper-15">740,000.00</div>
                    </div>
                </div>
                <div className="group-11">
                    <div className="overlap-5">
                        <img className="element-2" alt="Element" src={gear} />
                        <div className="text-wrapper-16">Maintenance</div>
                        <div className="text-wrapper-17">18,500.00</div>
                    </div>
                </div>
                <div className="group-12">
                    <div className="text-wrapper-18">763,000.00</div>
                    <div className="text-wrapper-19">Total:</div>
                </div>

                <button type="button" className="button-class-1" onClick={Viewdetails3}>
                    <img className="group-13" alt="Group" src={viewdetails} />
                </button>

                <button type="button" className="button-class-2"onClick={Viewdetails2}>
                    <img className="group-14" alt="Group" src={viewdetails} />
                </button>

                <button type="button" className="button-class-3"onClick={Viewdetails1}>
                    <img className="group-15" alt="Group" src={viewdetails} />
                </button>
                <div className="overlap-6">
                    <div className="monthly-expenses-wrapper">
                        <p className="p">
                            <span className="span">Monthly </span>
                            <span className="text-wrapper-20">Expenses</span>
                        </p>
                    </div>
                    <img className="monthly" alt="Monthly" src={monthly} />
                    <img className="landscape" alt="Landscape" src={sidelogo}/>
                </div>
            </div>
        </div>
    );
};
