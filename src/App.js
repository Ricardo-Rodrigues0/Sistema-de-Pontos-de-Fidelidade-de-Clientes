// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Points from './pages/points';
import Login from './pages/login/login';
import Signup from './pages/login/signup';
import ResetPassword from './pages/login/resetPassword';
import Welcome from './pages/welcome';
import GenerateCode from './pages/admin/generateCode';
import CodeList from './pages/admin/codeList';

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
