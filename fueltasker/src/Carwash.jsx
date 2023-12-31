import React, { useState, useEffect } from "react";
import "./Carwash.css";
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
import car1 from './images/car1.png';
import trash from './images/trash.png';
import { useNavigate } from 'react-router-dom';

export const Carwash = () => {

    useEffect(() => {
        document.title = 'CarWash';
      }, []);

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

    const handleMonthlyClick = () => {
        navigate('/monthly-expenses'); 
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

    const handleViewClick = () => {
        navigate('/viewprofile'); 
    };

    const handleLoginClick = () => {
        navigate('/login'); 
    };

    const handleCarWashClick = () => {
        navigate('/carwash-data'); 
    };

    return (
        <div className="carwash">
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
                        <img className="img-logout" alt="Logout" src={logout} />
                    </button>
                    <button className="group-3"onClick={handleDashboardClick}>
                        <div className="text-wrapper-4">Dashboard</div>
                        <img className="dash" alt="Dash" src={dashboard} />
                    </button>
                    <button className="group-4"onClick={handleGasPricesClick}>
                        <div className="text-wrapper-5">Gas Prices</div>
                        <img className="gaspr" alt="Gaspr" src={gasprice}/>
                    </button>
                    <button className="group-5"onClick={handleMonthlyClick}>
                        <div className="text-wrapper-6">Monthly Expenses</div>
                        <img className="img" alt="Monthly" src={monthly} />
                    </button>
                    <button className="group-6"onClick={handleToDoListClick}>
                        <div className="text-wrapper-7">To-Do-List</div>
                        <img className="todolist" alt="Todolist" src={todolist} />
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
                <div className="overlap-2">
                    <div className="monthly-expenses-wrapper">
                        <p className="monthly-expenses">
                            <span className="span">Monthly </span>
                            <span className="text-wrapper-110">Expenses</span>
                        </p>
                    </div>
                    <img className="monthly" alt="Monthly" src={monthly} />
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                </div>
                <div className="text-wrapper-11">Car Wash</div>
                <div className="overlap-wrapper">
                    <button className="div-wrapper"onClick={handleCarWashClick}>
                        <div className="text-wrapper-12">Add Data</div>
                    </button>
                </div>
                <div className="frame">
                    <div className="group-10">
                        <div className="text-wrapper-13">NOVEMBER 16, 2023</div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                            <button class="button" onclick="handleButtonClick()">
                                <img className="awe" alt="Awe" src={trash} />
                             </button>   
                                <div className="text-wrapper-14">Full Detailing</div>
                                <div className="text-wrapper-15">2000.00</div>
                                <img className="car" alt="Car" src={car1} />
                            </div>
                        </div>
                    </div>
                    <div className="group-11">
                        <div className="text-wrapper-13">NOVEMBER 16, 2023</div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                            <button class="button" onclick="handleButtonClick()">
                                <img className="awe" alt="Awe" src={trash} />
                             </button>
                                <div className="text-wrapper-14">Regular Wash</div>
                                <div className="text-wrapper-15">350.00</div>
                                <img className="car" alt="Car" src={car1} />
                            </div>
                        </div>
                    </div>
                    <div className="group-12">
                        <div className="text-wrapper-13">NOVEMBER 16, 2023</div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                            <button class="button" onclick="handleButtonClick()">
                                <img className="awe" alt="Awe" src={trash} />
                             </button>
                                <div className="text-wrapper-14">Regular Wash</div>
                                <div className="text-wrapper-15">350.00</div>
                                <img className="car" alt="Car" src={car1} />
                            </div>
                        </div>
                    </div>
                    <div className="group-13">
                        <div className="text-wrapper-13">NOVEMBER 16, 2023</div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                            <button class="button" onclick="handleButtonClick()">
                                <img className="awe" alt="Awe" src={trash} />
                             </button>
                                <div className="text-wrapper-14">Steam Cleaning</div>
                                <div className="text-wrapper-15">800.00</div>
                                <img className="car" alt="Car" src={car1} />
                            </div>
                        </div>
                    </div>
                    <div className="group-14">
                        <div className="text-wrapper-13">NOVEMBER 16, 2023</div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                            <button class="button" onclick="handleButtonClick()">
                                <img className="awe" alt="Awe" src={trash} />
                             </button>
                                <div className="text-wrapper-14">Steam Cleaning</div>
                                <div className="text-wrapper-15">800.00</div>
                                <img className="car" alt="Car" src={car1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
