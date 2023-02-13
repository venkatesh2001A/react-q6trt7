import React from 'react';
import '../css/login.css';
import {useForm} from react-hook-form;

function Login() {
  const {
    register,
    handlesubmit,
    formState:{errors},
  }=useForm()
  const submit = (data) => {
    console.log(data)
  }
  return (
    <div className="login">
     {/* <div className="login"> */}
      <form onSubmit={handlesubmit(submit)} className="loginform">
        Login
        <input
          type="text"
          {...register('username', { required: true, minLength: 3 })}
          id="logintext"
          placeholder="abc@gmail.com"
        />
        {errors.username && errors.username.type === 'required' && (
          <small>username is required</small>
        )}
        {errors.username && errors.username.type === 'minLength' && (
          <small>username should have atleast 3 characters</small>
        )}
        Password
        <input type="password" {...register('pass')} id="pass" />
        <div className="b1">
          <button id="b">submit</button>
        </div>
      </form>
    </div>
  )
}
export default Login