import React from "react";
import "./TodolistData.css";
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

export const TodoListTask = () => {
    return (
        <div className="todo-list-task">
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
                        <img className="img" alt="Logout" src={logout}/>
                    </div>
                    <div className="group-3">
                        <div className="text-wrapper-4">Dashboard</div>
                        <div className="dash-wrapper">
                            <img className="dash" alt="Dash" src={dashboard}/>
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
                        <img className="todolist" alt="Todolist" src={todolist}/>
                    </div>
                    <div className="group-7">
                        <div className="text-wrapper-8">Gas Consumption</div>
                        <img className="img-3" alt="Gascon" src={gascon}/>
                    </div>
                    <div className="group-8">
                        <div className="text-wrapper-5">Reminder</div>
                        <img className="img-3" alt="Reminder" src={reminder} />
                    </div>
                    <div className="group-9">
                        <div className="text-wrapper-9">Timeline</div>
                        <img className="timeline" alt="Timeline" src={timeline}/>
                    </div>
                </div>
                <div className="overlap-2">
                    <p className="to-do-list">
                        <span className="span">To Do </span>
                        <span className="text-wrapper-10">List</span>
                    </p>
                    <img className="todolist-2" alt="Todolist" src={todolist}/>
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                </div>
                <div className="group-10">
                    <div className="text-wrapper-11">Description:</div>
                    <div className="rectangle" />
                </div>
                <div className="group-11">
                    <div className="rectangle-2" />
                    <div className="text-wrapper-12">TaskName:</div>
                </div>
                <p className="create-task">
                    <span className="span">Create </span>
                    <span className="text-wrapper-10">Task</span>
                </p>
                <div className="group-wrapper">
                    <div className="group-12">
                        <div className="text-wrapper-13">Cancel</div>
                        <img className="trash" alt="Trash" src={trashw1} />
                    </div>
                </div>
                <div className="div-wrapper">
                    <div className="group-13">
                        <div className="text-wrapper-14">Save</div>
                        <img className="img-2" alt="Save" src={savew1} />
                    </div>
                </div>
            </div>
        </div>
    );
};
