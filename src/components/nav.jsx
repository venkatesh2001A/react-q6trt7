import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css';
function Nav() {
  const [expand, setExpand] = React.useState(false);
  return (
    <nav className={expand ? 'expand1 navbar' : 'navbar'}>
      <button onClick={() => setExpand(!expand)}>
        <i className="fa fa-bars icon"></i>
      </button>
      <NavLink to="/login">
        <i className="fa fa-user-circle-o"></i> Login
      </NavLink>
      <NavLink to="/signup">
        <i class="fa fa-user icon"></i> Signup
      </NavLink>
      <NavLink to="/calculator">
        <i class="fa fa-user icon"></i>
        Calculator
      </NavLink>
      <NavLink to="/Dummy">
        <i class="fa fa-user icon"></i>
        Dummy
      </NavLink>
      <NavLink to="/Employeeid">
        <i class="fa fa-user icon"></i>
        Employeeid
      </NavLink>
      <NavLink to="/Counter">
        <i class="fa fa-user icon"></i>
        Counter
      </NavLink>
    </nav>
  );
}
export default Nav;
