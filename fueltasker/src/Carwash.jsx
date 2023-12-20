import React from "react";
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

export const Carwash = () => {
    return (
        <div className="carwash">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">John Doe</div>
                    <div className="group">
                        <div className="overlap-group">
                            <div className="text-wrapper-2">View Profile</div>
                        </div>
                    </div>
                    <img className="ellipse" alt="Ellipse" src={profile} />
                    <div className="group-2">
                        <div className="text-wrapper-3">Logout</div>
                        <img className="img" alt="Logout" src={logout} />
                    </div>
                    <div className="group-3">
                        <div className="text-wrapper-4">Dashboard</div>
                        <img className="dash" alt="Dash" src={dashboard} />
                    </div>
                    <div className="group-4">
                        <div className="text-wrapper-5">Gas Prices</div>
                        <img className="gaspr" alt="Gaspr" src={gasprice}/>
                    </div>
                    <div className="group-5">
                        <div className="text-wrapper-6">Monthly Expenses</div>
                        <img className="img" alt="Monthly" src={monthly} />
                    </div>
                    <div className="group-6">
                        <div className="text-wrapper-7">To-Do-List</div>
                        <img className="todolist" alt="Todolist" src={todolist} />
                    </div>
                    <div className="group-7">
                        <div className="text-wrapper-8">Gas Consumption</div>
                        <img className="img-2" alt="Gascon" src={gascon} />
                    </div>
                    <div className="group-8">
                        <div className="text-wrapper-5">Reminder</div>
                        <img className="img-2" alt="Reminder" src={reminder} />
                    </div>
                    <div className="group-9">
                        <div className="text-wrapper-9">Timeline</div>
                        <img className="timeline" alt="Timeline" src={timeline} />
                    </div>
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
                <p className="car-wash">
                    <span className="span">Car </span>
                    <span className="text-wrapper-10">Wash</span>
                </p>
                <div className="overlap-wrapper">
                    <div className="div-wrapper">
                        <div className="text-wrapper-11">Add Data</div>
                    </div>
                </div>
                <div className="frame">
                    <div className="text-wrapper-12">NOVEMBER 16, 2023</div>
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                            <img className="awe" alt="Awe" src={trash} />
                            <div className="text-wrapper-13">Full Detailing</div>
                            <div className="text-wrapper-14">2000.00</div>
                            <img className="car" alt="Car" src={car1} />
                        </div>
                    </div>
                    <div className="text-wrapper-15">NOVEMBER 16, 2023</div>
                    <div className="text-wrapper-16">NOVEMBER 16, 2023</div>
                    <div className="group-10">
                        <div className="overlap-group-2">
                            <img className="awe" alt="Awe" src={trash} />
                            <div className="text-wrapper-13">Regular Wash</div>
                            <div className="text-wrapper-14">350.00</div>
                            <img className="car" alt="Car" src={car1} />
                        </div>
                    </div>
                    <div className="group-11">
                        <div className="overlap-group-2">
                            <img className="awe" alt="Awe" src={trash} />
                            <div className="text-wrapper-13">Regular Wash</div>
                            <div className="text-wrapper-14">350.00</div>
                            <img className="car" alt="Car" src={car1} />
                        </div>
                    </div>
                    <div className="text-wrapper-17">NOVEMBER 16, 2023</div>
                    <div className="text-wrapper-18">NOVEMBER 16, 2023</div>
                    <div className="group-12">
                        <div className="overlap-group-2">
                            <img className="awe" alt="Awe" src={trash} />
                            <div className="text-wrapper-13">Steam Cleaning</div>
                            <div className="text-wrapper-14">800.00</div>
                            <img className="car" alt="Car" src={car1} />
                        </div>
                    </div>
                    <div className="group-13">
                        <div className="overlap-group-2">
                            <img className="awe" alt="Awe" src={trash}/>
                            <div className="text-wrapper-13">Steam Cleaning</div>
                            <div className="text-wrapper-14">800.00</div>
                            <img className="car" alt="Car" src={car1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
