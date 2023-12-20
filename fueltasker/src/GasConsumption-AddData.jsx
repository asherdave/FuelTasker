import React from "react";
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

export const AddData = () => {
    return (
        <div className="add-data">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">John Doe</div>
                    <div className="group">
                        <button className="overlap-group">
                            <div className="text-wrapper-2">View Profile</div>
                        </button>
                    </div>
                    <img className="ellipse" alt="Ellipse" src={profile} />
                    <button className="group-2">
                        <div className="text-wrapper-3">Logout</div>
                        <img className="img" alt="Logout" src={logout} />
                    </button>
                    <button className="group-3">
                        <div className="text-wrapper-4">Dashboard</div>
                        <img className="dash" alt="Dash" src={dashboard} />
                    </button>
                    <button className="group-4">
                        <div className="text-wrapper-5">Gas Prices</div>
                        <img className="img-2" alt="Gaspr" src={gasprice} />
                    </button>
                    <button className="group-5">
                        <div className="text-wrapper-6">Monthly Expenses</div>
                        <img className="img" alt="Monthly" src={monthly}/>
                    </button>
                    <button className="group-6">
                        <div className="text-wrapper-7">To-Do-List</div>
                        <img className="todolist" alt="Todolist" src={todolist} />
                    </button>
                    <button className="group-7">
                        <div className="text-wrapper-8">Gas Consumption</div>
                        <img className="img-3" alt="Gascon" src={gascon} />
                    </button>
                    <button className="group-8">
                        <div className="text-wrapper-5">Reminder</div>
                        <img className="img-3" alt="Reminder" src={reminder} />
                    </button>
                    <button className="group-9">
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
                    </div>
                </div>
                <div className="overlap-group-wrapper">
                    <div className="div-wrapper">
                        <div className="text-wrapper-11">Current Odometer</div>
                    </div>
                </div>
                <div className="group-11">
                    <div className="div-wrapper">
                        <div className="text-wrapper-11">Fuel Volume (per liter)</div>
                    </div>
                </div>
                <div className="group-12">
                    <div className="div-wrapper">
                        <p className="text-wrapper-110">Fuel Unit Price (per liter)</p>
                    </div>
                </div>
                <div className="group-13">
                    <div className="div-wrapper">
                        <div className="text-wrapper-11">Notes</div>
                    </div>
                </div>
                <div className="group-wrapper">
                    <div className="group-14">
                        <div className="text-wrapper-12">Cancel</div>
                        <img className="trash" alt="Trash" src={trashw1} />
                    </div>
                </div>
                <div className="group-15">
                    <div className="group-16">
                        <div className="text-wrapper-13">Save</div>
                        <img className="img-2" alt="Save" src={savew1}/>
                    </div>
                </div>
                <p className="fuel-data">
                    <span className="span">Fuel </span>
                    <span className="text-wrapper-14">Data</span>
                </p>
            </div>
        </div>
    );
};
