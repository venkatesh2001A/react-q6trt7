import React from 'react';
import '../css/signup.css';
function Signup() {
  return (
    <form>
      <div class="formContainer">
        <h1>Sign Up Form</h1>

        <br />
        <br />
        <table>
          <tr>
            <label for="username">
              <b>username</b>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              required
            />
          </tr>
          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <label for="repeatPassword">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="repeatPassword"
            required
          />
        </table>
      </div>
      F{' '}
    </form>
  );
}
export default Signup;
