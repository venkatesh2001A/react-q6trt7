import React from 'react';
// import './style.css';
import Login from './pages/login';
import Dummy from './pages/Dummy';
import Signup from './pages/signup';
import Calculator from './pages/calculator';
import Nav from './components/nav';
import Employeeid from './pages/employeeid';
import Counter from './pages/counter';
// import Pagination from '/pages/Pagination';
import { Routes, Route } from 'react-router-dom';
// import { Routes, Route } from 'react-hook-form';

export default function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="" element={<Dummy />} />
        <Route path="Login" element={<Login />} />
        <Route path="Dummy" element={<Dummy />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Employeeid" element={<Employeeid />} />
        <Route path="Counter" element={<Counter />} />
        {/* <Route path="Pagination" element={<Pagination />} /> */}
      </Routes>
      {/* <Login />
      <Dummy />
      <Signup />
      <Calculator /> */}
      {/* <Nav /> */}
    </div>
  );
}
