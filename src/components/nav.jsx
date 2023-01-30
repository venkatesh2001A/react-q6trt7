import React from 'react';
import '../css/nav.css';
import { NavLink } from 'react-router-dom';
function Nav() {
  return (
    <div class="content">
      <ul class=" sub">
        <li class="style">
          {' '}
          <NavLink to="/login">Login </NavLink>{' '}
        </li>
        <li class="style">
          {' '}
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li class="style">
          {' '}
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li class="style">
          {' '}
          <NavLink to="/Dummy">Dummy</NavLink>
        </li>
        
        <li class="style">
          {' '}
        {/* <li class="style">
          {' '}
          <a href="">phone no</a>
        </li> */}
      </ul>
    </div>
  );
}
export default Nav;
