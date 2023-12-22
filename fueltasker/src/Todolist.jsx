import React, { useState, useEffect } from "react";
import "./Todolist.css";
import sidelogo from './images/sidelogo.png';
import profile from './images/profile.png';
import logout12 from './images/logout.png';
import dashboard from './images/dashboard.png';
import gasprice from './images/gasprices.png';
import monthly from './images/monthlyexpenses.png';
import todolist from './images/todolist.png';
import gascon from './images/gasconsumption.png';
import reminder from './images/reminder.png';
import timeline from './images/timeline.png';
import trash from './images/trash.png';
import check from './images/check.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Ensure the path is correct
import axios from 'axios';


export const ToDoList = () => {

    const { logout } = useAuth(); // Use useAuth hook
    const navigate = useNavigate();
    const [userData, setUserData] = useState({}); // State to hold user data
    const [tasks, setTasks] = useState([]); // State to hold tasks

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

useEffect(() => {
    fetchTasks();
}, []);

const fetchTasks = async () => {
    try {
        const response = await axios.get('http://localhost:8080/todolist/getAllToDoLists');
        setTasks(response.data); // Make sure response.data is the array of tasks
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
};


    const handleDashboardClick = () => {
        navigate('/dashboard'); 
    };

    const handleGasPricesClick = () => {
        navigate('/gasprices'); 
    };

    const handleMonthlyClick = () => {
        navigate('/monthly-expenses'); 
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

    const handleLogout = () => {
        logout(); // Update the authentication state to false
        navigate('/login'); // Redirect to login page
    };

    const handleAddClick = () => {
        navigate('/todolist-task'); 
    };

    const handleViewClick = () => {
        navigate('/viewprofile'); 
    };

        const handleDeleteTask = async (taskId) => {
            try {
                await axios.delete(`http://localhost:8080/todolist/deleteToDoList/${taskId}`);
                setTasks(tasks.filter(task => task.todolistId !== taskId)); // Use todolistId for comparison
            } catch (error) {
                console.error('Error deleting task:', error);
            }
        };
        

    return (
        <div className="to-do-list">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">{userData.fName}</div>
                    <div className="group"onClick={handleViewClick}>
                        <button className="overlap-group">
                            <div className="text-wrapper-2">View Profile</div>
                        </button>
                    </div>
                    <img className="ellipse" alt="Ellipse" src={profile} />
                    <button className="group-2"onClick={handleLogout}>
                        <div className="text-wrapper-3">Logout</div>
                        <img className="img-logout" alt="Logout" src={logout12} />
                    </button>
                    <button className="group-3"onClick={handleDashboardClick}>
                        <div className="text-wrapper-4">Dashboard</div>
                        <img className="dash" alt="Dash" src={dashboard} />
                    </button>
                    <button className="group-4"onClick={handleGasPricesClick}>
                        <div className="text-wrapper-5">Gas Prices</div>
                        <img className="gaspr" alt="Gaspr" src={gasprice} />
                    </button>
                    <button className="group-5"onClick={handleMonthlyClick}>
                        <div className="text-wrapper-6">Monthly Expenses</div>
                        <img className="img" alt="Monthly" src={monthly} />
                    </button>
                    <button className="group-6">
                        <div className="text-wrapper-7">To-Do-List</div>
                        <img className="todolist" alt="Todolist" src={todolist} />
                    </button>
                    <button className="group-7"onClick={handleGasConsumptionClick}>
                        <div className="text-wrapper-8">Gas Consumption</div>
                        <img className="img-gascon" alt="Gascon" src={gascon} />
                    </button>
                    <button className="group-8"onClick={handleReminderClick}>
                        <div className="text-wrapper-5">Reminder</div>
                        <img className="img-2" alt="Reminder" src={reminder} />
                    </button>
                    <button className="group-9"onClick={handleTimelineClick}>
                        <div className="text-wrapper-9">Timeline</div>
                        <img className="timeline" alt="Timeline" src={timeline}/>
                    </button>
                </div>
                <div className="overlap-2">
                    <p className="completed-task">
                        <span className="span">Completed</span>
                        <span className="text-wrapper-10"> Task</span>
                    </p>
                    <div className="frame">
                        
                    </div>
                </div>
                <div className="overlap-3">
                    <p className="pending-task">
                        <span className="span">Pending </span>
                        <span className="text-wrapper-12">Task</span>
                    </p>
                    <div className="overlap-wrapper">
                        <div className="div-wrapper"onClick={handleAddClick}>
                            <div className="text-wrapper-13">Add Task</div>
                        </div>
                    </div>
                    
                    {tasks.map(task => (
                    <div key={task.todolistId} className="group-wrapper">
                        <div className="group-10">
                            <div className="group-11">
                                <div className="overlap-group-3">
                                    <div className="div-2" />
                                    <div className="text-wrapper-14">{task.tname}</div>
                                    <button className="delete-button" onClick={() => handleDeleteTask(task.todolistId)}>
                                        <img className="awe-2" alt="Delete" src={trash} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
                
                </div>
                <div className="overlap-4">
                    <p className="p">
                        <span className="span">To Do </span>
                        <span className="text-wrapper-12">List</span>
                    </p>
                    <img className="todolist-2" alt="Todolist" src={todolist}/>
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                </div>
            </div>
        </div>
    );
};
