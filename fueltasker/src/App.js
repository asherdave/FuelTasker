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
import { Reminder } from './Reminder.jsx';


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
          <Route path="/Reminder" element={<Reminder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
