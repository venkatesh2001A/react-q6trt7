import React from 'react';
import Welcome from '../components/welcome';
import Bye from '../components/bye';
// import '../css/Dummy.css';
// import Login from './pages/login'
function Dummy() {
  return (
    <div>
      <p> Dummy</p>
      <Welcome name="venkatesh"></Welcome>
      <Welcome name="Rubini"></Welcome>
      <Welcome name="Abarna"></Welcome>

      <Bye name="venkatesh"></Bye>
    </div>
  );
}
export default Dummy;
