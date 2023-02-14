import React from 'react';
import '../css/nav.css';
import { NavLink } from 'react-router-dom';
function Nav() {
  return (
    <div className="content">
      <ul className=" sub">
        <li className="style">
          {' '}
          <i class="fa fa-user icon"></i>
          <NavLink to="/login">Login </NavLink>{' '}
        </li>
        <li className="style">
          {' '}
          <i class="fa fa-user icon"></i>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li className="style">
          {' '}
          <i class="fa fa-user icon"></i>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li className="style">
          {' '}
          <i class="fa fa-user icon"></i>
          <NavLink to="/Dummy">Dummy</NavLink>
        </li>

        <li className="style">
          {' '}
          <i class="fa fa-user icon"></i>
          <NavLink to="/Employeeid">Employeeid</NavLink>
        </li>
        <li className="style">
          {' '}
          <i class="fa fa-user icon"></i>
          <NavLink to="/Counter">Counter</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
