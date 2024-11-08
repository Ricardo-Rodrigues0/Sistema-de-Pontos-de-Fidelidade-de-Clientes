// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Points from './pages/points';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import ResetPassword from './pages/Login/ResetPassword';
import Welcome from './pages/Welcome';
import GenerateCode from './pages/admin/GenerateCode';
import CodeList from './pages/admin/CodeList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/points" element={<Points />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/generatecode" element={<GenerateCode />} />
                <Route path="/codelist" element={<CodeList />} />
            </Routes>
        </Router>
    );
}

export default App;
