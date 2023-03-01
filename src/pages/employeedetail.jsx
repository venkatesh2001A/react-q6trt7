import React from 'react';
import n from "../css/detail.css";
import '../css/employeedetail.css';
function Details() {
  return (
    <div className="demo">
      <div className="card"></div>
      <img src={demo} alt="demo" style="width:90%" />
      <h4>Name :</h4>
      <button className="ww">Back</button>

      <label className="pp">Employee Detail</label>
      
      <table className="www">
        <ul className="cro">
          <li>Name <span className="set">:</span></li>
          <li>Age<span className="set">:</span></li>
          <li>Email<span className="set">:</span></li>
          <li>Street<span className="set">:</span><li>
          <li>City<span className="set">:</span></li>
          <li>Zip<span className="set">:</span></li>
          <li>Region<span className="set">:</span></li>
          <li>Country<span className="set">:</span></li>
          <li>Employee Id<span className="set">:</span></li>
          <li>Info<span className="set">:</span></li>
          <li>Date of Joining<span className="set">:</span></li>
          <li>Mobile Number<span className="set">:</span></li>
      </ul>
      </li>
      </table>
      </div>
  );
}
export default Details;