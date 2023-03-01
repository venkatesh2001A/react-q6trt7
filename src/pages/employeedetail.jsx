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
          <tbody>
            <tr>
              <td className="say">name</td>
              <td className="byy">{employee.Name}</td>
              </tr>
              <tr>
              <td className="say">age</td>
              <td className="byy">{employee.Age}</td>
              </tr>
              <tr>
              <td className="say">email</td>
              <td className="byy">{employee.Email}</td>
              </tr>
              <tr>
              <td className="say">street</td>
              <td className="byy">{employee.Street}</td>
              </tr>
              <tr>
              <td className="say">city</td>
              <td className="byy">{employee.City}</td>
              </tr>
              <tr>
              <td className="say">zip</td>
              <td className="byy">{employee.Zip}</td>
              </tr>
              <tr>
              <td className="say">region</td>
              <td className="byy">{employee.Region}</td>
              </tr>
              <tr>
              <td className="say">country</td>
              <td className="byy">{employee.Country}</td>
              </tr>
              <tr>
              <td className="say">info</td>
              <td className="byy">{employee.Info}</td>
              </tr>
              <tr>
              <td className="say">employee id</td>
              <td className="byy">{employee.Employeeid}</td>
              </tr>
              {/* <tr>
              <td className="say">employee id</td>
              <td className="byy">{employee.EmployeeId}</td>
              </tr> */}
              <tr>
              <td className="say">date of joining</td>
              <td className="byy">{employee["Date of Joining"]}</td>
              </tr>
              <tr>
              <td className="say">phone number</td>
              <td className="byy">{employee["phone number"]}</td>
              </tr>




              {/* </tr> */}

      </table>
      </div>
  );
}
export default Details;