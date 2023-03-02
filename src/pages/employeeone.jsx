// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// // import '../css/empcard.css';
// import { setEmployee } from '../store/slice/employee.slice';

// function Empcard() {
//   // let navigate = useNavigate();
//   // let dispatch = useDispatch();
//   // const view = (employee) => {
//   //   console.log(employee);
//   //   dispatch(setEmployee(employee));
//   //   navigate('/empone');
//   // };

//   const singleEmployee = (e) => {
//     return (
//       <div>
//         <div className="emp"></div>
//         <h3 className="name">{e.Name}</h3>
//         <button onClick={() => view(e)} className="cardbtn">
//           View
//         </button>
//         <h4 className="num">{e.EmployeeID}</h4>
//         <div className="secondemp"></div>
//       </div>
//     );
//   };
//   const allEmployee = () => {
//     return data.map((e) => <div className="totaldiv">{singleEmployee(e)}</div>);
//   };
//   return <div>{allEmployee()}</div>;
// }
// export default Empcard;
