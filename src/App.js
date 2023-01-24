import React from 'react';
// import './style.css';
import Login from './pages/login';
import Dummy from './pages/Dummy';
import Signup from './pages/signup';
import { Routes, Route } from 'react-router-dom';
// import Signup from './pages/Calculator';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="Dummy" element={<Dummy />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>
      {/* <Login />
      <Dummy />
      <Signup /> */}
      {/* <Calculator /> */}
    </div>
  );
}
