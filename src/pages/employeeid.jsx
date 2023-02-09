import React from 'react';
import '../css/Employeeid.css';
import profile from '../assets/profile.jpg';

const data = [];
function Employeeid() {
  //const SingleEmployee = (e) => {
  return (
    <div className="card">
      <img
        src="https://www.olympus-imaging.co.in/content/000107507.jpg"
        alt="employee"
        // style="width:100%"
      />
      <div className="container">
        <h4>
          <b>venkatesh</b>
        </h4>
        <p>18cs101</p>
        <button>view</button>
      </div>
    </div>
  );
}
//}

export default Employeeid;
