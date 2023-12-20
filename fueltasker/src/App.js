import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './Home.jsx';
import { Login } from './Login.jsx'; // Make sure to import the Login component
import { Register } from './Register.jsx';
import { AboutUs } from './AboutUs.jsx';
import { Dashboard } from './Dashboard.jsx';
import { ViewProfile } from './viewprofile.jsx';
import { EditProfile } from './EditProfile.jsx';
import { ChangePassword } from './ChangePassword.jsx';
import { Reminder } from './Reminder.jsx';
import { ToDoList } from './Todolist.jsx';
import { GasPrices } from './gasprices.jsx';
import { CreateReminder } from './CreateReminder.jsx';
import { UpcomingView } from './Upcomingview.jsx';
import { PastView } from './Pastview.jsx';
import { Timeline } from './Timeline.jsx';
import { GasConsumption } from './GasConsumption.jsx';
import { AddData } from './GasConsumption-AddData.jsx';
import { MonthlyExpenses } from './MonthlyExpenses.jsx';
import { Carwash } from './Carwash.jsx';
import { CarwashData } from './CarwashData.jsx';
import { Customization } from './Customization.jsx';
import { Maintenance } from './Maintenance.jsx';
import { MaintenanceData } from './Maintenance-AddData.jsx';
import { CustomizationData } from './Customization-AddData.jsx';
import { TodoListTask } from './TodolistData.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/viewprofile" element={<ViewProfile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/gasprices" element={<GasPrices />} />
          <Route path="/createreminder" element={<CreateReminder />} />
          <Route path="/upcomingview" element={<UpcomingView />} />
          <Route path="/pastview" element={<PastView />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/gas-consumption" element={<GasConsumption />} />
          <Route path="/add-data" element={<AddData />} />
          <Route path="/monthly-expenses" element={<MonthlyExpenses />} />
          <Route path="/carwash" element={<Carwash />} />
          <Route path="/carwash-data" element={<CarwashData />} />
          <Route path="/customization" element={<Customization />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/maintenance-data" element={<MaintenanceData />} />
          <Route path="/customization-data" element={<CustomizationData />} />
          <Route path="/todolist-task" element={<TodoListTask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
