import React from 'react';
// import './style.css';
import Login from './pages/login';
import Dummy from './pages/Dummy';
import Signup from './pages/signup';
import Calculator from './pages/calculator';
import Nav from './components/nav';
import Employeelist from './pages/employeelist';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="" element={<Employeelist />} />
        <Route path="Login" element={<Login />} />
        <Route path="Dummy" element={<Dummy />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Employeelist" element={<Employeelist />} />
      </Routes>
      {/* <Login />
      <Dummy />
      <Signup />
      <Calculator /> */}
      {/* <Nav /> */}
    </div>
  );
}
