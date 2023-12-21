import React, { useState, useEffect } from "react";
import "./GasConsumption.css";
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
import rect131 from './images/rect131.png';
import drop from './images/drop.png';
import gaspump from './images/gaspump.png';
import money from './images/money.png';
import location from './images/location.png';
import line from './images/line.png';
import { useNavigate } from 'react-router-dom';

export const GasConsumption = () => {

    useEffect(() => {
        document.title = 'Gas Consumption';
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

    const handleMonthlyExpensesClick = () => {
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

    const handleViewProfileClick = () => {
        navigate('/viewprofile'); 
    };

    const handleLogoutClick = () => {
        navigate('/login'); // Replace '/login' with your login route path
        console.log("Logout button clicked, redirecting to login");
    };

    const handleGasConDataClick = () => {
        navigate('/add-data');
    };

    return (
        <div className="gas-consumption">
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
                    <button className="group-3"onClick={handleDashboardClick}>
                        <div className="text-wrapper-4">Dashboard</div>
                        <img className="dash" alt="Dash" src={dashboard} />
                    </button>
                    <button className="group-4" onClick={handleGasPricesClick}>
                        <div className="text-wrapper-5">Gas Prices</div>
                        <img className="gaspr" alt="Gaspr" src={gasprice}/>
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
                        <img className="img-2" alt="Gascon" src={gascon} />
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
                <div className="overlap-wrapper">
                    <div className="overlap-2">
                        <div className="rectangle-wrapper">
                            <img className="rectangle" alt="Rectangle" src={rect131} />
                        </div>
                        <div className="text-wrapper-10">Average Consumption</div>
                        <div className="text-wrapper-11">59.19</div>
                        <div className="text-wrapper-12">KM/L</div>
                    </div>
                </div>
                <div className="overlap-group-wrapper">
                    <div className="overlap-2">
                        <div className="rectangle-wrapper">
                            <img className="rectangle" alt="Rectangle" src={rect131} />
                        </div>
                        <div className="text-wrapper-13">Driving Cost</div>
                        <div className="text-wrapper-14">112.17</div>
                        <div className="text-wrapper-15">PHP/100KM</div>
                    </div>
                </div>
                <div className="overlap-3">
                    <div className="group-10">
                        <div className="gas-conxsumption-wrapper">
                            <p className="p">
                                <span className="span">Gas </span>
                                <span className="text-wrapper-16">
                                    Consumption
                                    <br />
                                </span>
                            </p>
                        </div>
                        <img className="gascon" alt="Gascon" src={gascon} />
                    </div>
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                </div>
                <div className="div-wrapper">
                    <div className="overlap-4">
                        <div className="img-wrapper">
                            <img className="rectangle-2" alt="Rectangle" src={rect131} />
                        </div>
                        <div className="group-11">
                            <div className="text-wrapper-17">Last Refueling</div>
                            <div className="text-wrapper-18">TOTAL</div>
                            <p className="element-KM-KM-l">
                                <span className="text-wrapper-19">+299</span>
                                <span className="text-wrapper-20">&nbsp;</span>
                                <span className="text-wrapper-21">KM</span>
                                <span className="text-wrapper-20">&nbsp;</span>
                                <span className="span">| </span>
                                <span className="text-wrapper-19">45.32</span>
                                <span className="text-wrapper-20">&nbsp;</span>
                                <span className="text-wrapper-21">KM/L</span>
                                <span className="text-wrapper-20">&nbsp;</span>
                                <span className="span">|</span>
                                <span className="text-wrapper-20">&nbsp;</span>
                                <span className="text-wrapper-19">+199.97</span>
                                <span className="text-wrapper-20">&nbsp;</span>
                                <span className="text-wrapper-21">PHP</span>
                            </p>
                            <div className="group-12">
                                <img className="element" alt="Element" src={location} />
                                <p className="element-KM">
                                    <span className="text-wrapper-19">526</span>
                                    <span className="span">&nbsp;</span>
                                    <span className="text-wrapper-20">KM</span>
                                </p>
                                <img className="element-2" alt="Element" src={money} />
                                <p className="element-PHP">
                                    <span className="text-wrapper-19">1,389</span>
                                    <span className="span">&nbsp;</span>
                                    <span className="text-wrapper-20">PHP</span>
                                </p>
                                <img className="drop" alt="Drop" src={drop} />
                                <p className="element-l">
                                    <span className="text-wrapper-19">16</span>
                                    <span className="span">&nbsp;</span>
                                    <span className="text-wrapper-20">L</span>
                                </p>
                                <img className="line" alt="Line" src={line} />
                                <img className="line-2" alt="Line" src={line} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-13">
                    <div className="element-wrapper">
                        <img className="element-3" alt="Element" src={gaspump} />
                    </div>
                </div>
                <button className="overlap-5" onClick={handleGasConDataClick}>
                    <div className="text-wrapper-add">Add Data</div>
                </button>
            </div>
        </div>
    );
};
