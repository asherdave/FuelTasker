import React from "react";
import "./ViewProfile.css";

export const ViewProfile = () => {
    return (
        <div className="view-profile">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">John Doe</div>
                    <div className="group">
                        <div className="overlap-group">
                            <div className="text-wrapper-2">View Profile</div>
                        </div>
                    </div>
                    <img className="ellipse" alt="Ellipse" src="ellipse-2.png" />
                    <div className="group-2">
                        <div className="text-wrapper-3">Logout</div>
                        <img className="img" alt="Logout" src="logout-1.png" />
                    </div>
                    <div className="group-3">
                        <div className="text-wrapper-4">Dashboard</div>
                        <div className="dash-wrapper">
                            <img className="dash" alt="Dash" src="dash-2.png" />
                        </div>
                    </div>
                    <div className="group-4">
                        <div className="text-wrapper-5">Gas Prices</div>
                        <img className="gaspr" alt="Gaspr" src="gaspr-1.png" />
                    </div>
                    <div className="group-5">
                        <div className="text-wrapper-6">Monthly Expenses</div>
                        <img className="img" alt="Monthly" src="monthly-1.png" />
                    </div>
                    <div className="group-6">
                        <div className="text-wrapper-7">To-Do-List</div>
                        <img className="todolist" alt="Todolist" src="todolist-1.png" />
                    </div>
                    <div className="group-7">
                        <div className="text-wrapper-8">Gas Consumption</div>
                        <img className="img-2" alt="Gascon" src="gascon-1.png" />
                    </div>
                    <div className="group-8">
                        <div className="text-wrapper-5">Reminder</div>
                        <img className="img-2" alt="Reminder" src="reminder-1.png" />
                    </div>
                    <div className="group-9">
                        <div className="text-wrapper-9">Timeline</div>
                        <img className="timeline" alt="Timeline" src="timeline-1.png" />
                    </div>
                </div>
                <div className="overlap-2">
                    <p className="profile">
                        <span className="span">Pro</span>
                        <span className="text-wrapper-10">file</span>
                    </p>
                    <img className="landscape" alt="Landscape" src="landscape-2.png" />
                    <img className="use" alt="Use" src="use-1.png" />
                </div>
                <div className="overlap-wrapper">
                    <div className="overlap-3">
                        <img className="profile-2" alt="Profile" src="profile-1.png" />
                        <img className="fuelframe" alt="Fuelframe" src="fuelframe-1.png" />
                    </div>
                </div>
                <p className="user-profile">
                    <span className="span">User </span>
                    <span className="text-wrapper-11">Profile</span>
                </p>
                <div className="overlap-group-wrapper">
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">Edit User Details</div>
                    </div>
                </div>
                <div className="group-10">
                    <div className="div-wrapper">
                        <div className="text-wrapper-13">Change Password</div>
                    </div>
                </div>
                <div className="text-wrapper-14">First Name:</div>
                <div className="text-wrapper-15">Last Name:</div>
                <div className="text-wrapper-16">Date of Birth:</div>
                <div className="text-wrapper-17">Email:</div>
                <div className="text-wrapper-18">Contact Number:</div>
                <div className="overlap-4">
                    <div className="text-wrapper-19">John</div>
                </div>
                <div className="overlap-5">
                    <div className="text-wrapper-20">Doe</div>
                </div>
                <div className="overlap-6">
                    <div className="text-wrapper-21">December 25, 2003</div>
                </div>
                <div className="overlap-7">
                    <div className="text-wrapper-22">johndoe@gmail.com</div>
                </div>
                <div className="overlap-8">
                    <div className="text-wrapper-23">12345678901</div>
                </div>
            </div>
        </div>
    );
};
