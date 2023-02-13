import React from 'react';
import '../css/login.css';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    console.log(data);
  };
  return (
    <div className="login-form">
      {/* <div className="login"> */}
      <form onSubmit={handleSubmit(submit)} className="loginform">
        Login
        <input
          type="task"
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
        <input type="password" {...register('pass')} id="a" />
        <div className="b1">
          <button id="b">submit</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
