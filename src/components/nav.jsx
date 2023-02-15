import React from 'react';
import '../css/nav.css';
import { NavLink } from 'react-router-dom';
function Nav() {
  return (
    <div className="content">
      <ul className=" sub">
        <li className="style">
          <NavLink to="/login">
            <i class="fa fa-user icon"></i> Login{' '}
          </NavLink>{' '}
        </li>
        <li className="style">
          {' '}
          <NavLink to="/signup">
            <i class="fa fa-user icon"></i> Signup
          </NavLink>
        </li>
        <li className="style">
          {' '}
          <NavLink to="/calculator">
            <i class="fa fa-user icon"></i>
            Calculator
          </NavLink>
        </li>
        <li className="style">
          {' '}
          <NavLink to="/Dummy">
            <i class="fa fa-user icon"></i>
            Dummy
          </NavLink>
        </li>

        <li className="style">
          {' '}
          <NavLink to="/Employeeid">
            <i class="fa fa-user icon"></i>
            Employeeid
          </NavLink>
        </li>
        <li className="style">
          {' '}
          <NavLink to="/Counter">
            <i class="fa fa-user icon"></i>
            Counter
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
