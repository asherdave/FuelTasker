import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './Home.jsx';
import { Login } from './Login.jsx';
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
import { AuthProvider } from './AuthContext.js';
import ProtectedRoute from './ProtectedRoute'; // Make sure to create this component

function App() {
  return (
    <AuthProvider> {/* Wrap the entire Router with AuthProvider */}
      <Router>
        <div className="App">
          <Routes>

            {/* Public Routes */}
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/aboutus" element={<AboutUs />} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/viewprofile" element={<ProtectedRoute><ViewProfile /></ProtectedRoute>} />
            <Route path="/editprofile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
            <Route path="/changepassword" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
            <Route path="/reminder" element={<ProtectedRoute><Reminder /></ProtectedRoute>} />
            <Route path="/todolist" element={<ProtectedRoute><ToDoList /></ProtectedRoute>} />
            <Route path="/gasprices" element={<ProtectedRoute><GasPrices /></ProtectedRoute>} />
            <Route path="/createreminder" element={<ProtectedRoute><CreateReminder /></ProtectedRoute>} />
            <Route path="/upcomingview" element={<ProtectedRoute><UpcomingView /></ProtectedRoute>} />
            <Route path="/pastview" element={<ProtectedRoute><PastView /></ProtectedRoute>} />
            <Route path="/timeline" element={<ProtectedRoute><Timeline /></ProtectedRoute>} />
            <Route path="/gas-consumption" element={<ProtectedRoute><GasConsumption /></ProtectedRoute>} />
            <Route path="/add-data" element={<ProtectedRoute><AddData /></ProtectedRoute>} />
            <Route path="/monthly-expenses" element={<ProtectedRoute><MonthlyExpenses /></ProtectedRoute>} />
            <Route path="/carwash" element={<ProtectedRoute><Carwash /></ProtectedRoute>} />
            <Route path="/carwash-data" element={<ProtectedRoute><CarwashData /></ProtectedRoute>} />
            <Route path="/customization" element={<ProtectedRoute><Customization /></ProtectedRoute>} />
            <Route path="/maintenance" element={<ProtectedRoute><Maintenance /></ProtectedRoute>} />
            <Route path="/maintenance-data" element={<ProtectedRoute><MaintenanceData /></ProtectedRoute>} />
            <Route path="/customization-data" element={<ProtectedRoute><CustomizationData /></ProtectedRoute>} />
            <Route path="/todolist-task" element={<ProtectedRoute><TodoListTask /></ProtectedRoute>} />
            
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
