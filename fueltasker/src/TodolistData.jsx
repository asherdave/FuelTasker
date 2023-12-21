import React, { useState, useEffect } from "react";
import "./TodolistData.css";
import axios from 'axios';
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
import savew1 from './images/savew1.png';
import trashw1 from './images/trashw1.png';
import { useNavigate } from 'react-router-dom';

export const TodoListTask = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({}); // State to hold user data
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    

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

    const handleLoginClick = () => {
        navigate('/login'); 
    };

    const handleViewClick = () => {
        navigate('/viewprofile'); 
    };

// Function to handle task deletion
const handleDeleteTask = async (todolistId) => {
    try {
        const response = await axios.delete(`http://localhost:8080/todolist//deleteToDoList/${todolistId}`);
        // Handle the response or refresh the list
    } catch (error) {
        console.error('Error deleting task: ', error);
    }
};

const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (!taskName || !description) {
        console.error('Task Name and Description are required');
        return; // Exit the function if validation fails
    }
    try {
        const response = await axios.post('http://localhost:8080/todolist/insertToDoList', {
            tname: taskName,
            desc: description
        });

        if (response.status === 200) {
            console.log('Task created successfully');
        } else {
            console.log('Response status:', response.status);
        }
        // Handle the response or refresh the list
        setTaskName('');
        setDescription('');
        console.log('Task Name:', taskName);
        console.log('Description:', description);

    } catch (error) {
        console.error('Error creating task: ', error);
    }
};



    return (
        <div className="todo-list-task">
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
                        <img className="img-logout" alt="Logout" src={logout}/>
                    </button>
                    <button className="group-3"onClick={handleDashboardClick}>
                        <div className="text-wrapper-4">Dashboard</div>
                        <div className="dash-wrapper">
                            <img className="dash" alt="Dash" src={dashboard}/>
                        </div>
                    </button>
                    <button className="group-4"onClick={handleGasPricesClick}>
                        <div className="text-wrapper-5">Gas Prices</div>
                        <img className="img-2" alt="Gaspr" src={gasprice} />
                    </button>
                    <button className="group-5"onClick={handleMonthlyClick}>
                        <div className="text-wrapper-6">Monthly Expenses</div>
                        <img className="img" alt="Monthly" src={monthly} />
                    </button>
                    <button className="group-6"onClick={handleToDoListClick}>
                        <div className="text-wrapper-7">To-Do-List</div>
                        <img className="todolist" alt="todolist" src={todolist}/>
                    </button>
                    <button className="group-7"onClick={handleGasConsumptionClick}>
                        <div className="text-wrapper-8">Gas Consumption</div>
                        <img className="img-3" alt="Gascon" src={gascon}/>
                    </button>
                    <button className="group-8"onClick={handleReminderClick}>
                        <div className="text-wrapper-5">Reminder</div>
                        <img className="img-3" alt="Reminder" src={reminder} />
                    </button>
                    <button className="group-9"onClick={handleTimelineClick}>
                        <div className="text-wrapper-9">Timeline</div>
                        <img className="timeline" alt="Timeline" src={timeline}/>
                    </button>
                </div>
                <div className="overlap-2">
                    <p className="to-do-list">
                        <span className="span">To Do </span>
                        <span className="text-wrapper-10">List</span>
                    </p>
                    <img className="todolist-2" alt="Todolist" src={todolist}/>
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                </div>
                <form onSubmit={handleSubmit} className="task-form">
                <div className="group-10">
                <div className="text-wrapper-11">Description:</div>
                <input type="text" className="rectangle" onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="group-11">
            <input type="text" className="rectangle-2" onChange={(e) => setTaskName(e.target.value)} />
                <div className="text-wrapper-12">TaskName:</div>
            </div>
            </form>
                <p className="create-task">
                    <span className="span">Create </span>
                    <span className="text-wrapper-10">Task</span>
                </p>
                <button className="group-wrapper" onClick={handleToDoListClick}>
    <div className="group-12">
        <div className="text-wrapper-13">Cancel</div>
        <img className="trash" alt="Trash" src={trashw1} />
    </div>
</button>
<button className="div-wrapper" onClick={handleSubmit}>
    <div className="group-13">
        <div className="text-wrapper-14">Save</div>
        <img className="save" alt="Save" src={savew1} />
    </div>
</button>

            </div>
        </div>
    );
};
