import React from 'react';
// import './style.css';
import Login from './pages/login';
import Dummy from './pages/Dummy';
import Signup from './pages/signup';
import Calculator from './pages/calculator';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="Dummy" element={<Dummy />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Calculator" element={<Calculator />} />
      </Routes>
      <Login />
      <Dummy />
      <Signup />
      <Calculator />
    </div>
  );
}
