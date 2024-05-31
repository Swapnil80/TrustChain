import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './Modules/Landing_page';
import Organisation_register from './Modules/Organisation_register';
import Organisation_login from './Modules/Organisation_login';
import LoginPage from './Modules/Login_user';
import UserRegister from './Modules/user-register';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/organisation/register" element={<Organisation_register/>} />
        <Route path="/organisation/login" element={<Organisation_login/>} />
        <Route path="/user/login" element={<LoginPage/>} />
        <Route path="/user/register" element={<UserRegister/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
