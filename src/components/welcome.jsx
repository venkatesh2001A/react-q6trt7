import React from 'react';
import '../css/Welcome.css';

function Welcome(props) {
  return <p className="welcome"> {props.name}</p>;
}
export default Welcome;
