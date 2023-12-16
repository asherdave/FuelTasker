import React from "react";
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

export const CreateReminder = () => {
    return (
        <div className="create-reminder">
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
                        <div className="dash-wrapper">
                            <img className="dash" alt="Dash" src={dashboard} />
                        </div>
                    </div>
                    <div className="group-4">
                        <div className="text-wrapper-5">Gas Prices</div>
                        <img className="img-2" alt="Gaspr" src={gasprice} />
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
                        <img className="img-3" alt="Gascon" src={gascon} />
                    </div>
                    <div className="group-8">
                        <div className="text-wrapper-5">Reminder</div>
                        <img className="img-3" alt="Reminder" src={reminder} />
                    </div>
                    <div className="group-9">
                        <div className="text-wrapper-9">Timeline</div>
                        <img className="timeline" alt="Timeline" src={timeline} />
                    </div>
                </div>
                <div className="overlap-2">
                    <img className="reminder" alt="Reminder" src={reminder} />
                    <img className="rectangle" alt="Rectangle" src="rectangle-99.svg" />
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
                    <div className="group-13">
                        <div className="text-wrapper-13">Cancel</div>
                        <img className="trash" alt="Trash" src="trash-1.png" />
                    </div>
                </div>
                <div className="group-14">
                    <div className="group-15">
                        <div className="text-wrapper-14">Save</div>
                        <img className="img-2" alt="Save" src="save-1.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};
