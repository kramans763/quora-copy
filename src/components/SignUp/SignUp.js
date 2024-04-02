import React, { useState } from 'react'

import loginlogo from "../../assets/loginlogo.jpg"

import { Link, useNavigate } from 'react-router-dom'
import "./SignUp.css"
import { useForm } from 'react-hook-form'
const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const[isRegistered,setIsRegistered]=useState(false);
  const navigate=useNavigate();

  const onSubmit = async (data) => {  
    data.appType = 'quora';
    try {
      
      const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'projectId': 'f104bi07c490',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
         alert("signup successfull");
        navigate("/login");

        console.log('Signup successful');
      } else {

        setIsRegistered(true);  
        console.error('Signup failed', await response.text());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="mainPage">
    
    <div className="container">
       <div className="logoContainer">
        <img src={loginlogo} alt="login_logo" className="loginLogo" />
      </div> 
      <form className="signup_form"  onSubmit={handleSubmit(onSubmit)}>
        <input
          id="name"
          label="Name"
          type="text"
          className="textField"
          placeholder='Name'
          {...register("name", { required: true, pattern: /^[A-Za-z ]+$/ })}
        />
        {errors.name && <p className='error-text'>Name is required and should contain only letters.</p>}

        <input
          id="email"
          label="Email"
          type="email"
          className="textField"
          placeholder='email'
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p className='error-text'>Valid email is required.</p>}

        <input
          id="password"
          label="Password"
          type="password"
          className="textField"
          placeholder='Password'
          {...register("password", {
            required: true,
            minLength: 8,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
          })}
        />
          {errors.password && <p className='error-text'>Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one number and one special character.</p>}
          {isRegistered?<p className='error-text'>User already exist.Please Login.</p>:''}
        

        <button type="submit" className="signupBttn">
          Create account
        </button>
      </form>

      <div className="log_in">
        Existing user{" "}
        <Link to="/login" className="tag">
          Log In
        </Link>
      </div>
    </div>
  </div>
  )
}

export default SignUp