import React, { useState, useEffect } from "react";
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
import trash from './images/trash.png';
import { useNavigate } from 'react-router-dom';


export const PastView = () => {
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

    const handlePastViewClick = () => {
        navigate("/pastview"); // Navigate to the create reminder page
    };

    const handleUpcomingViewClick = () => {
        navigate("/upcomingview"); // Navigate to the upcoming page
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
        <div className="past-view">
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
                        <img className="img-2" alt="Gascon" src={gascon} />
                    </button>
                    <button className="group-8" onClick={handleReminderClick}>
                        <div className="text-wrapper-5">Reminder</div>
                        <img className="img-2" alt="Reminder" src={reminder}/>
                    </button>
                    <button className="group-9" onClick={handleTimelineClick}>
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
                    <div className="rectangle-3" onClick={handlePastViewClick}/>
                    <div className="overlap-wrapper">
                        <div className="div-wrapper" onClick={handleUpcomingViewClick}>
                            <div className="text-wrapper-12">UPCOMING</div>
                        </div>
                    </div>
                    <div className="text-wrapper-13">PAST</div>
                </div>
                <div className="frame">
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                            <div className="text-wrapper-14">2:00 PM 11/25/2023</div>
                            <div className="text-wrapper-15">CHANGE OIL</div>
                            <img className="check" alt="Check" src={check1}/>
                            <button class="button" onclick="handleButtonClick()">
                            <img className="awe" alt="Awe" src={trash} />
                            </button>
                        </div>
                    </div>
                    <div className="group-10">
                        <div className="overlap-group-2">
                            <div className="text-wrapper-14">2:00 PM 11/25/2023</div>
                            <div className="text-wrapper-15">CHANGE OIL</div>
                            <img className="check" alt="Check" src={check1} />
                            <button class="button" onclick="handleButtonClick()">
                            <img className="awe" alt="Awe" src={trash} />
                            </button>
                        </div>
                    </div>
                    <div className="group-11">
                        <div className="overlap-group-2">
                            <div className="text-wrapper-14">2:00 PM 11/25/2023</div>
                            <div className="text-wrapper-15">CHANGE OIL</div>
                            <img className="check" alt="Check" src={check1}/>
                            <button class="button" onclick="handleButtonClick()">
                            <img className="awe" alt="Awe" src={trash}/>
                            </button>
                        </div>
                    </div>
                    <div className="group-12">
                        <div className="overlap-group-2">
                            <div className="text-wrapper-14">2:00 PM 11/25/2023</div>
                            <div className="text-wrapper-15">CHANGE OIL</div>
                            <img className="check" alt="Check" src={check1} />
                            <button class="button" onclick="handleButtonClick()">
                            <img className="awe" alt="Awe" src= {trash}/>
                            </button>
                        </div>
                    </div>
                    <div className="group-13">
                        <div className="overlap-group-2">
                            <div className="text-wrapper-14">2:00 PM 11/25/2023</div>
                            <div className="text-wrapper-15">CHANGE OIL</div>
                            <img className="check" alt="Check" src={check1} />
                            <button class="button" onclick="handleButtonClick()">
                            <img className="awe" alt="Awe" src={trash}/>
                            </button>
                        </div>
                    </div>
                    <div className="group-14">
                        <div className="overlap-group-2">
                            <div className="text-wrapper-14">2:00 PM 11/25/2023</div>
                            <div className="text-wrapper-15">CHANGE OIL</div>
                            <img className="check" alt="Check" src={check1} />
                            <button class="button" onclick="handleButtonClick()">
                            <img className="awe" alt="Awe" src={trash} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
