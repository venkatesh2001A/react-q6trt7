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
        <i className="fa fa-user-circle-o icon"></i>Login
      </NavLink>
      <NavLink to="/signup">
        <i class="fa fa-user-plus icon"></i>Signup
      </NavLink>
      <NavLink to="/calculator">
        <i class="fa fa-calculator icon"></i>
        Calculator
      </NavLink>
      <NavLink to="/Dummy">
        <i class="fa fa-podcast icon"></i>
        Dummy
      </NavLink>
      {/* <NavLink to="/Employeeid">
        <i class="fa fa-user-o icon"></i>
        Employeeid
      </NavLink> */}
      {/* <NavLink to="/Employee detail">
        <i className="fa fa-id-card icon"></i>Emplotee detail
      </NavLink> */}
      <NavLink to="/Counter">
        <i class="fa fa-dot-circle-o icon"></i>
        Counter
      </NavLink>
      <NavLink to="/Pagination">
        <i class="fa fa-file-powerpoint-o icon"></i>
        Pagination
      </NavLink>
    </nav>
  );
}
export default Nav;
