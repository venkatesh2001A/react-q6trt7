import React from 'react';
import '../css/employeelist.css';
function Employeelist() {
  return (
    <div className="card">
      <img
        src="https://www.olympus-imaging.co.in/content/000107507.jpg"
        alt="employee"
      />
      <div className="container">
        <h4>
          <b>venkatesh</b>
        </h4>
        <p>18cs101</p>
      </div>
    </div>
  );
}
export default Employeelist;
