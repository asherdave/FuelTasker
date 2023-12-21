import React, { useState, useEffect } from "react";
import "./GasConsumption-AddData.css";
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
import trashw1 from './images/trashw1.png';
import savew1 from './images/savew1.png';
import { useNavigate } from 'react-router-dom';

export const AddData = () => {
    const navigate = useNavigate();
    const [gasConsumptionData, setGasConsumptionData] = useState([]);
    const [formData, setFormData] = useState({
        date: "",
        odometer: "",
        fuelvolume: "",
        fuelunitprice: "",
        notes: ""
    });

    useEffect(() => {
        document.title = 'Add Data';
      }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/fueltasker/addDataGasConsumption", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Successful response, you can redirect or perform any other actions
                console.log("Data added successfully");
                await fetchGasConsumptionData();
                navigate("/gas-consumption");
            } else {
                // Handle error cases
                console.error("Failed to add data");
            }
        } catch (error) {
            console.error("Error adding data: ", error);
        }
    };
    

     // Function to fetch gas consumption data
    const fetchGasConsumptionData = async () => {
        try {
            const response = await fetch("http://localhost:8080/fueltasker/getAllGasConsumption");
            const gasData = await response.json();
            setGasConsumptionData(gasData);
        } catch (error) {
            console.error('Error fetching gas consumption data: ', error);
        }
    };

    // useEffect to call fetchUserData when the component mounts
    useEffect(() => {
        fetchGasConsumptionData();
      }, []);

    const handleDashboardClick = () => {
        navigate('/dashboard'); 
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
        <div className="add-data">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper"></div>
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
                        <img className="img-3" alt="Gascon" src={gascon} />
                    </button>
                    <button className="group-8" onClick={handleReminderClick}>
                        <div className="text-wrapper-5">Reminder</div>
                        <img className="img-3" alt="Reminder" src={reminder} />
                    </button>
                    <button className="group-9" onClick={handleTimelineClick}>
                        <div className="text-wrapper-9">Timeline</div>
                        <img className="timeline" alt="Timeline" src={timeline}/>
                    </button>
                </div>
                <div className="overlap-2">
                    <div className="group-10">
                        <p className="gas-consumption">
                            <span className="span">Gas </span>
                            <span className="text-wrapper-20">
                                Consumption
                                <br />
                            </span>
                        </p>
                        <img className="gascon" alt="Gascon" src={gascon} />
                    </div>
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                </div>
                <div className="overlap-wrapper">
                    <div className="div-wrapper">
                        <div className="text-wrapper-11">Refueling Date</div>
                        <input type="text" id="date" name="refuelingDate" className="rectangle"/>
                    </div>
                </div>
                <div className="overlap-group-wrapper">
                    <div className="div-wrapper">
                        <div className="text-wrapper-11">Current Odometer</div>
                        <input type="text" id="odometer" name="currentodometer" className="rectangle"/>
                    </div>
                </div>
                <div className="group-11">
                    <div className="div-wrapper">
                        <div className="text-wrapper-11">Fuel Volume (per liter)</div>
                        <input type="text" id="fuelvolume" name="fuelvolume" className="rectangle"/>
                    </div>
                </div>
                <div className="group-12">
                    <div className="div-wrapper">
                        <div className="text-wrapper-110">Fuel Unit Price (per liter)</div>
                        <input type="text" id="fuelunitprice" name="fuelunitprice" className="rectangle"/>
                    </div>
                </div>
                <div className="group-13">
                    <div className="div-wrapper">
                        <div className="text-wrapper-11">Notes</div>
                        <input type="text" id="notes" name="notes" className="rectangle"/>
                    </div>
                </div>
                <div className="group-wrapper" onClick={handleGasConsumptionClick}>
                    <div className="group-14">
                        <div className="text-wrapper-12">Cancel</div>
                        <img className="trash" alt="Trash" src={trashw1} />
                    </div>
                </div>
                <button className="group-15" onClick={handleFormSubmit}>
                    <div className="group-16">
                        <div className="text-wrapper-13">Save</div>
                        <img className="save" alt="Save" src={savew1}/>
                    </div>
                </button>
                <p className="fuel-data">
                    <span className="span">Fuel </span>
                    <span className="text-wrapper-14">Data</span>
                </p>
            </div>
        </div>
    );
};
