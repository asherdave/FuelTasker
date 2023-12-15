import React from "react";
import "./EditProfile.css";
import sidelogo from './images/sidelogo.png';
import fuelframe from './images/fuelframe.png';
import profile from './images/profile.png';
import logout from './images/logout.png';
import dashboard from './images/dashboard.png';
import gasprice from './images/gasprices.png';
import monthly from './images/monthlyexpenses.png';
import todolist from './images/todolist.png';
import gascon from './images/gasconsumption.png';
import reminder from './images/reminder.png';
import timeline from './images/timeline.png';
import viewprofile from './images/viewprofile.png';
import trashw1 from './images/trashw1.png';
import savew1 from './images/savew1.png';


export const EditProfile = () => {
    return (
        
        <div className="edit-profile">
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
                        <img className="img-logout" alt="Logout" src={logout}/>
                    </div>
                    <div className="group-3">
                        <div className="text-wrapper-4">Dashboard</div>
                        <img className="dash" alt="Dash" src={dashboard} />
                    </div>
                    <div className="group-4">
                        <div className="text-wrapper-5">Gas Prices</div>
                        <img className="img-2" alt="Gaspr" src={gasprice} />
                    </div>
                    <div className="group-5">
                        <div className="text-wrapper-6">Monthly Expenses</div>
                        <img className="img" alt="Monthly" src={monthly}/>
                    </div>
                    <div className="group-6">
                        <div className="text-wrapper-7">To-Do-List</div>
                        <img className="todolist" alt="Todolist" src={todolist} />
                    </div>
                    <div className="group-7">
                        <div className="text-wrapper-8">Gas Consumption</div>
                        <img className="img-2" alt="Gascon" src={gascon}/>
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
                    <p className="profile">
                        <span className="span">Pro</span>
                        <span className="text-wrapper-10">file</span>
                    </p>
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                    <img className="use" alt="Use" src={viewprofile} />
                </div>
                <div className="overlap-wrapper">
                    <div className="overlap-3">
                        <img className="profile-2" alt="Profile" src={profile} />
                        <img className="fuelframe" alt="Fuelframe" src={fuelframe} />
                    </div>
                </div>
                <p className="p">
                    <span className="span">Edit </span>
                    <span className="text-wrapper-11">Profile</span>
                </p>
                <div className="overlap-group-wrapper">
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">Upload Photo</div>
                    </div>
                </div>
                <div className="text-wrapper-13">First Name:</div>
                <div className="text-wrapper-14">Last Name:</div>
                <div className="text-wrapper-15">Date of Birth:</div>
                <div className="text-wrapper-16">Email:</div>
                <div className="text-wrapper-17">Contact Number:</div>
                <div className="rectangle" />
                <div className="rectangle-2" />
                <div className="rectangle-3" />
                <div className="rectangle-4" />
                <div className="rectangle-5" />
                <div className="group-wrapper">
                    <div className="group-10">
                        <div className="text-wrapper-18">Cancel</div>
                        <img className="trash" alt="Trash" src={trashw1} />
                    </div>
                </div>
                <div className="group-11">
                    <div className="group-12">
                        <div className="text-wrapper-19">Save</div>
                        <img className="img-save" alt="Save" src={savew1} />
                    </div>
                </div>
            </div>
        </div>
    );
};
