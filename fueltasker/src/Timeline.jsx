import React from "react";
import "./Timeline.css";
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
import rect99 from './images/rect99.png'
import timeline2 from './images/timeline2.png'
import rectangle3 from './images/Rectangle3.png'
import gaswhite from './images/gaswhite.png'
import line from './images/line.png'
import line2 from './images/line2.png'
import element from './images/element.png'
import rectangle169 from './images/rectangle169.png'

export const Timeline = () => {
    return (
        <div className="timeline">
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
                        <img className="img-3" alt="Timeline" src={timeline} />
                    </div>
                </div>
                <img className="rectangle" alt="Rectangle" src="rectangle-98.svg" />
                <div className="overlap-2">
                    <img className="img-4" alt="Timeline" src={timeline2} />
                    <img className="rectangle-2" alt="Rectangle" src={rect99} />
                    <div className="timeline-wrapper">
                        <p className="p">
                            <span className="span">Time</span>
                            <span className="text-wrapper-10">line</span>
                        </p>
                    </div>
                    <img className="landscape" alt="Landscape" src={landscape} />
                </div>
                <div className="overlap-wrapper">
                    <div className="overlap-3">
                        <div className="rectangle-wrapper">
                            <img className="rectangle-3" alt="Rectangle" src={rectangle3} />
                        </div>
                        <button className="group-10" alt="Group" src={rectangle169} />
                        <p className="image-text">Delete</p>
                        <img className="line" alt="Line" src={line} />
                        <img className="line-2" alt="Line" src={line2} />
                        <div className="text-wrapper-11">06.17.2023</div>
                        <p className="element-km">
                            <span className="text-wrapper-12">4,882</span>
                            <span className="text-wrapper-13"> km</span>
                        </p>
                        <div className="text-wrapper-14">I/100km</div>
                        <div className="text-wrapper-15">38.70</div>
                        <p className="element-KM">
                            <span className="text-wrapper-16">+356</span>
                            <span className="text-wrapper-13"> KM</span>
                        </p>
                        <p className="element-PHP">
                            <span className="text-wrapper-16">+680.80</span>
                            <span className="text-wrapper-17">&nbsp;</span>
                            <span className="text-wrapper-13">PHP</span>
                            <span className="text-wrapper-17">&nbsp;</span>
                        </p>
                        <img className="element" alt="Element" src={element} />
                        <img className="rectangle-3" alt="Rectangle" src="rectangle-196.svg" />
                        <img className="gaswhite" alt="Gaswhite" src={gaswhite} />
                    </div>
                </div>
                <div className="overlap-group-wrapper">
                    <div className="overlap-3">
                        <div className="rectangle-wrapper">
                            <img className="rectangle-3" alt="Rectangle" src={rectangle3} />
                        </div>
                        <button className="group-10" alt="Group" src={rectangle169} />
                        <p className="image-text">Delete</p>
                        <img className="line" alt="Line" src={line} />
                        <img className="line-2" alt="Line" src={line2} />
                        <div className="text-wrapper-11">06.17.2023</div>
                        <p className="element-km-2">
                            <span className="text-wrapper-12">4,526</span>
                            <span className="text-wrapper-13"> km</span>
                        </p>
                        <div className="text-wrapper-14">I/100km</div>
                        <div className="text-wrapper-18">41.87</div>
                        <p className="element-KM">
                            <span className="text-wrapper-16">+314</span>
                            <span className="text-wrapper-13"> KM</span>
                        </p>
                        <p className="element-PHP-2">
                            <span className="text-wrapper-16">+510.00</span>
                            <span className="text-wrapper-17">&nbsp;</span>
                            <span className="text-wrapper-13">PHP</span>
                            <span className="text-wrapper-17">&nbsp;</span>
                        </p>
                        <img className="element" alt="Element" src={element} />
                        <img className="rectangle-4" alt="Rectangle" src="image.svg" />
                        <img className="gaswhite" alt="Gaswhite" src={gaswhite} />
                    </div>
                </div>
                <div className="div-wrapper">
                    <div className="overlap-3">
                        <div className="rectangle-wrapper">
                            <img className="rectangle-3" alt="Rectangle" src={rectangle3} />
                        </div>
                        <button className="group-10" alt="Group" src={rectangle169} />
                        <p className="image-text">Delete</p>
                        <img className="line" alt="Line" src={line} />
                        <img className="line-2" alt="Line" src={line2} />
                        <div className="text-wrapper-11">06.17.2023</div>
                        <p className="element-km-3">
                            <span className="text-wrapper-12">4,212</span>
                            <span className="text-wrapper-13"> km</span>
                        </p>
                        <div className="text-wrapper-14">I/100km</div>
                        <div className="text-wrapper-15">42.25</div>
                        <p className="element-KM">
                            <span className="text-wrapper-16">+300</span>
                            <span className="text-wrapper-13"> KM</span>
                        </p>
                        <p className="element-PHP-2">
                            <span className="text-wrapper-16">+511.76</span>
                            <span className="text-wrapper-17">&nbsp;</span>
                            <span className="text-wrapper-13">PHP</span>
                            <span className="text-wrapper-17">&nbsp;</span>
                        </p>
                        <img className="element" alt="Element" src={element} />
                        <img className="rectangle-4" alt="Rectangle" src="rectangle-196-2.svg" />
                        <img className="gaswhite" alt="Gaswhite" src={gaswhite} />
                    </div>
                </div>
                <div className="overlap-4">
                    <div className="group-11">
                        <div className="overlap-3">
                            <div className="rectangle-wrapper">
                                <img className="rectangle-3" alt="Rectangle" src={rectangle3} />
                            </div>
                            <button className="group-10" alt="Group" src={rectangle169} />
                            <p className="image-text">Delete</p>
                            <img className="line" alt="Line" src={line} />
                            <img className="line-2" alt="Line" src={line2} />
                            <div className="text-wrapper-11">06.17.2023</div>
                            <p className="element-km-3">
                                <span className="text-wrapper-12">3,912</span>
                                <span className="text-wrapper-13"> km</span>
                            </p>
                            <div className="text-wrapper-14">I/100km</div>
                            <div className="text-wrapper-18">---,--</div>
                            <p className="element-KM-2">
                                <span className="text-wrapper-16">+0</span>
                                <span className="text-wrapper-13"> KM</span>
                            </p>
                            <p className="element-PHP-2">
                                <span className="text-wrapper-16">+560.76</span>
                                <span className="text-wrapper-17">&nbsp;</span>
                                <span className="text-wrapper-13">PHP</span>
                                <span className="text-wrapper-17">&nbsp;</span>
                            </p>
                            <img className="element" alt="Element" src={element} />
                            <img className="rectangle-4" alt="Rectangle" src="rectangle-196-3.svg" />
                            <img className="gaswhite" alt="Gaswhite" src={gaswhite} />
                        </div>
                    </div>
                    <div className="text-wrapper-19">Start</div>
                </div>
            </div>
        </div>
    );
};
