import React from 'react';
import '../css/signup.css';
import { useForm } from 'react-hook-form';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    console.log(data);
  };
  return (
    <div className="signup">
      {/* <div className="login"> */}
      <form onSubmit={handleSubmit(submit)} className="formContainer">
        <label className="light">
          <i class="fa fa-user"></i> Signup
        </label>
        <input
          type="text"
          {...register('username', { required: true, minLength: 3 })}
          id="logintext"
          placeholder="hello@gmail.com"
        />
        {errors.username && errors.username.type === 'required' && (
          <small>username is required</small>
        )}
        {errors.username && errors.username.type === 'minLength' && (
          <small>username should have atleast 3 characters</small>
        )}
        <div className="room">
          <i class="fa fa-user"></i>Password
        </div>
        <input type="password" {...register('pass')} id="ab" />
        <div className="b1">
          <i class="fa fa-user"></i>
          Retype password
        </div>
        <input
          type="password"
          ClassName="retype password"
          {...register('repass')}
          id="ac"
        />
        <div className="s1">
          <button id="bye">submit</button>
        </div>
      </form>
    </div>
  );
}
export default Signup;
