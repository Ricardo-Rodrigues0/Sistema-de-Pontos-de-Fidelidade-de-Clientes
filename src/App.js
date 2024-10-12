// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login/Login';
import Signup from './Login/Signup';
import ResetPassword from './Login/ResetPassword';
import Welcome from './Welcome';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
                <Route path="/welcome" element={<Welcome />} />
            </Routes>
        </Router>
    );
}

export default App;
