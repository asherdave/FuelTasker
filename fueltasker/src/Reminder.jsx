import React from 'react';
import './Reminder.css';
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


export const Reminder = () => {

    return (
        <div className="reminder">
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
                        <img className="img-logout" alt="Logout" src={logout} />
                    </button>
                    <div className="group-wrapper">
                        <button className="group-3">
                            <div className="text-wrapper-4">Reminder</div>
                            <img className="img-2" alt="Reminder" src={reminder} />
                        </button>
                    </div>
                    <div className="group-4">
                        <div className="text-wrapper-5">Dashboard</div>
                        <div className="dash-wrapper">
                            <img className="dash" alt="dash" src={dashboard} />
                        </div>
                    </div>
                    <div className="group-5">
                        <div className="text-wrapper-4">Gas Prices</div>
                        <img className="gaspr" alt="Gaspr" src={gasprice} />
                    </div>
                    <div className="group-6">
                        <div className="text-wrapper-6">Monthly Expenses</div>
                        <img className="img" alt="Monthly" src={monthly} />
                    </div>
                    <div className="group-7">
                        <div className="text-wrapper-7">To-Do-List</div>
                        <img className="todolist" alt="Todolist" src={todolist} />
                    </div>
                    <div className="group-8">
                        <div className="text-wrapper-8">Gas Consumption</div>
                        <img className="img-2" alt="Gascon" src={gascon} />
                    </div>
                    <div className="group-9">
                        <div className="text-wrapper-9">Timeline</div>
                        <img className="timeline" alt="Timeline" src={timeline} />
                    </div>
                </div>
                <div className="overlap-2">
                    <img className="img-3" alt="Reminder" src={reminder} />
                    <div className="reminder-wrapper">
                        <p className="p">
                            <span className="span">Remi</span>
                            <span className="text-wrapper-10">nder</span>
                        </p>
                    </div>
                    <img className="landscape" alt="Landscape" src={landscape} />
                </div>
                <div className="div-wrapper">
                    <div className="group-10">
                        <div className="group-11" />
                        <div className="text-wrapper-11">CREATE REMINDER</div>
                    </div>
                </div>
                <div className="overlap-wrapper">
                    <div className="overlap-3">
                        <div className="group-12" />
                        <div className="text-wrapper-12">VIEW REMINDER</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
