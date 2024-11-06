// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Points from './points';
import Login from './Login/Login';
import Signup from './Login/Signup';
import ResetPassword from './Login/ResetPassword';
import Welcome from './Welcome';
import GenerateCode from './GenerateCode';
import CodeList from './CodeList';

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
