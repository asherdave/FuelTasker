import React from "react";
import "./Todolist.css";
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
import trash from './images/trash.png';
import check from './images/check.png';

export const ToDoList = () => {
    return (
        <div className="to-do-list">
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
                        <img className="gaspr" alt="Gaspr" src={gasprice} />
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
                        <img className="timeline" alt="Timeline" src={timeline}/>
                    </div>
                </div>
                <div className="overlap-2">
                    <p className="completed-task">
                        <span className="span">Completed</span>
                        <span className="text-wrapper-10"> Task</span>
                    </p>
                    <div className="frame">
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                                <div className="div-2">
                                    <img className="check" alt="Check" src={check} />
                                </div>
                                <img className="awe" alt="Awe" src={trash} />
                                <div className="text-wrapper-11">Apply Tint</div>
                            </div>
                        </div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                                <div className="div-2">
                                    <img className="check" alt="Check" src={check} />
                                </div>
                                <div className="text-wrapper-11">PMS</div>
                                <img className="awe" alt="Awe" src={trash} />
                            </div>
                        </div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                                <div className="div-2">
                                    <img className="check" alt="Check" src={check} />
                                </div>
                                <div className="text-wrapper-11">Change Sparkplug</div>
                                <img className="awe" alt="Awe" src={trash} />
                            </div>
                        </div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                                <div className="div-2">
                                    <img className="check" alt="Check" src={check} />
                                </div>
                                <div className="text-wrapper-11">Change Sparkplug</div>
                                <img className="awe" alt="Awe" src={trash} />
                            </div>
                        </div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                                <div className="div-2">
                                    <img className="check" alt="Check" src={check} />
                                </div>
                                <div className="text-wrapper-11">Change Sparkplug</div>
                                <img className="awe" alt="Awe" src={trash} />
                            </div>
                        </div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                                <div className="div-2">
                                    <img className="check" alt="Check" src={check} />
                                </div>
                                <div className="text-wrapper-11">Change Sparkplug</div>
                                <img className="awe" alt="Awe" src={trash} />
                            </div>
                        </div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                                <div className="div-2">
                                    <img className="check" alt="Check" src={check} />
                                </div>
                                <div className="text-wrapper-11">Change Sparkplug</div>
                                <img className="awe" alt="Awe" src={trash} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlap-3">
                    <p className="pending-task">
                        <span className="span">Pending </span>
                        <span className="text-wrapper-12">Task</span>
                    </p>
                    <div className="overlap-wrapper">
                        <div className="div-wrapper">
                            <div className="text-wrapper-13">Add Task</div>
                        </div>
                    </div>
                    <div className="group-wrapper">
                        <div className="group-10">
                            <div className="group-11">
                                <div className="overlap-group-3">
                                    <div className="div-2" />
                                    <div className="text-wrapper-14">Change Oil</div>
                                    <img className="awe-2" alt="Awe" src={trash} />
                                </div>
                            </div>
                            <div className="group-12">
                                <div className="overlap-group-3">
                                    <div className="div-2" />
                                    <img className="awe-2" alt="Awe" src={trash} />
                                    <div className="text-wrapper-14">Clean Air Filter</div>
                                </div>
                            </div>
                            <div className="group-13">
                                <div className="overlap-group-3">
                                    <div className="div-2" />
                                    <div className="text-wrapper-14">Refill Coolant</div>
                                    <img className="awe-2" alt="Awe" src={trash} />
                                </div>
                            </div>
                            <div className="group-14">
                                <div className="overlap-group-3">
                                    <div className="div-2" />
                                    <img className="awe-2" alt="Awe" src={trash} />
                                    <div className="text-wrapper-14">Car Wash</div>
                                </div>
                            </div>
                            <div className="group-15">
                                <div className="overlap-group-3">
                                    <div className="div-2" />
                                    <img className="awe-2" alt="Awe" src={trash} />
                                    <div className="text-wrapper-14">Car Wash</div>
                                </div>
                            </div>
                            <div className="group-16">
                                <div className="overlap-group-3">
                                    <div className="div-2" />
                                    <img className="awe-2" alt="Awe" src={trash} />
                                    <div className="text-wrapper-14">Car Wash</div>
                                </div>
                            </div>
                            <div className="group-17">
                                <div className="overlap-group-3">
                                    <div className="div-2" />
                                    <div className="text-wrapper-14">Check Tire Pressure</div>
                                    <img className="awe-2" alt="Awe" src={trash} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlap-4">
                    <p className="p">
                        <span className="span">To Do </span>
                        <span className="text-wrapper-12">List</span>
                    </p>
                    <img className="todolist-2" alt="Todolist" src={todolist}/>
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                </div>
                <p className="element-COMPLETE">
                    <span className="text-wrapper-10">38% </span>
                    <span className="span">COMPLETE</span>
                </p>
            </div>
        </div>
    );
};
