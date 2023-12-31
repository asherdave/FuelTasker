import React, { useState, useEffect } from "react";
import "./CreateReminder.css";
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
import savew1 from './images/savew1.png';
import trashw1 from './images/trashw1.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


export const CreateReminder = () => {

    useEffect(() => {
        document.title = 'Create Reminder';
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

    const handleReminderClick = () => {
        navigate("/reminder"); // Navigate to the upcoming page
    };

    const handleUpcomingViewClick = () => {
        navigate("/upcomingview"); // Navigate to the upcoming page
    };

    const handleViewClick = () => {
        navigate("/viewprofile"); // Navigate to the upcoming page
    };

    const handleDashboardClick = () => {
        navigate("/dashboard"); // Navigate to the upcoming page
    };

    const handleGasPricesClick = () => {
        navigate("/gasprices"); // Navigate to the upcoming page
    };

    const handleMonthlyClick = () => {
        navigate("/monthly-expenses"); // Navigate to the upcoming page
    };

    const handleToDoListClick = () => {
        navigate("/todolist"); // Navigate to the upcoming page
    };

    const handleGasConsumptionClick = () => {
        navigate("/gas-consumption"); // Navigate to the upcoming page
    };

    const handleTimelineClick = () => {
        navigate("/timeline"); // Navigate to the upcoming page
    };

    return (
        <div className="create-reminder">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">{userData.fName}</div>
                    <div className="group" onClick={handleViewClick}>
                        <div className="overlap-group" >
                            <div className="text-wrapper-2">View Profile</div>
                        </div>
                    </div>
                    <img className="ellipse" alt="Ellipse" src={profile} />
                    <button className="group-2" onClick={handleReminderClick}>
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
                    <button className="group-6" onClick={handleMonthlyClick}>
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
                    <img className="rectangle" alt="Rectangle" src={rect99} />
                    <div className="reminder-wrapper">
                        <p className="p">
                            <span className="span">Re</span>
                            <span className="text-wrapper-10">minder</span>
                        </p>
                    </div>
                    <img className="landscape" alt="Landscape" src={landscape} />
                </div>
                <p className="div-2">
                    <span className="span">Create </span>
                    <span className="text-wrapper-11">Reminder</span>
                </p>
                <div className="overlap-wrapper">
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">Title</div>
                    </div>
                </div>                      
                <div className="overlap-group-wrapper">
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">Description</div>
                    </div>
                </div>
                <div className="group-10">
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">Date</div>
                    </div>
                </div>
                <div className="group-11">
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">Start Time</div>
                    </div>
                </div>
                <div className="group-12">
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">End Time</div>
                    </div>
                </div>
                <div className="group-wrapper">
                    <div className="group-13" onClick={handleReminderClick}>
                        <div className="text-wrapper-13">Cancel</div>
                        <img className="trash" alt="Trash" src={trashw1}/>
                    </div>
                </div>
                <div className="group-14">
                    <div className="group-15" onClick={handleUpcomingViewClick}>
                        <div className="text-wrapper-14">Save</div>
                        <img className="save" alt="Save" src={savew1} />
                    </div>
                </div>
            </div>
        </div>
    );
};
