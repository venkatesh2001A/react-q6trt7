import React from 'react';
import '../css/login.css';
function Login() {
  return (
    <div className="login-form">
      <h1> Login-form</h1>
      <p>User Name</p>
      <input type="task" name="user" id="a" placeholder="User Name" />
      <p>Password</p>
      <input type="password" id="a" name="password" placeholder="Password" />
      <br />
      <br />
      <button type="submit">login </button>
    </div>
  );
}
export default Login;
