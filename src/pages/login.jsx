import React from 'react';
import '../css/login.css';
function Login() {
  return (
    <div className="loginForm">
      <div className="login-form">
        <h1> Login-form</h1>
        <p>User Name</p>
        <input type="text" name="user" placeholder="User Name" />
        <p>Password</p>
        <input type="passsword" name="password" placeholder="Password" />
        <br />
        <br />
        <button type="submit">login </button>
      </div>
    </div>
  );
}
export default Login;
