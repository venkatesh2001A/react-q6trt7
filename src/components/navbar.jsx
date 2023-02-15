import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css';
function Navbar() {
  const [expand, setExpand] = React.useState(false);
  return (
    <nav className={expand ? 'expand1 navbar' : 'navbar'}>
      <button onClick={() => setExpand(!expand)}>
        <i className="fa-solid fa-user-secret"></i>
      </button>
      <NavLink to="/Login">
        <i className="fa-solid fa-user-secret"></i> Login
      </NavLink>
      <NavLink to="/Signup">
        <i class="fa-solid fa-user-plus"></i> Signup
      </NavLink>
      <NavLink to="/Calculator">
        <i class="fa-solid fa-calculator"></i> Calculator
      </NavLink>
      <NavLink to="/Dummy">
        <i class="fa-solid fa-robot"></i> Dummy
      </NavLink>
      <NavLink to="/EmployeeList">
        <i class="fa-solid fa-address-book"></i> EmployeeList
      </NavLink>
      <NavLink to="/Employeedetails">
        <i class="fa-solid fa-circle-info"></i> Employeedetails
      </NavLink>
      <NavLink to="/Counter">
        <i class="fa-solid fa-hourglass-end"></i> Counter
      </NavLink>
      {/* <a href="/EmployeeList">EmployeeList</a> */}
    </nav>
  );
}
export default Navbar;
