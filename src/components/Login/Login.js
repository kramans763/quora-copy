import React, { useState } from 'react'
import "./Login.css";
import quora from "../../assets/quora-logo.jpg"
import emailLogo from "../../assets/email-logo.png"
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const[inValidPassword,setInValidPassword]=useState(false);
  const navigate =useNavigate();



  const onSubmit = async (data) => {
    data.appType = 'quora';
    try {
     const response = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'projectId': 'f104bi07c490',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const result = await response.json();
      const authToken = result.token;
      const userData=JSON.stringify(result.data)
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('userData', userData);
      
      navigate("/");

    } else {
      setInValidPassword(true);
      console.error('Login failed',await response.text() );
    }
  } catch (error) {
    console.error('Error:', error);
  }

};

const signupPage=()=>{
  navigate("/signup")
}


return (
    <div className="mainPage">
    <div className="loginPage">
      <div className="loginPageHeader">
        <img src={quora} alt="Quora" className="quora-logo" />
      </div>
      <h4 className="text">
        A place to share knowledge and better understand the world
      </h4>
      <div className="loginContent">
        <div className="leftSide">
          <div className="termsAndConditions">
            By continuing you indicate that you agree to Quora's{" "}
            <span className="condition">Terms of Service</span> and{" "}
            <span className="condition">Privacy Policy</span>.
          </div>

          <div className="leftSideBtn">
       
            <button type="submit" className="signupBtn"
             onClick={signupPage}
             >
              <img src={emailLogo} alt="logo" className="emailLogo" />
              Sign up with Email
            </button>
          </div>
        </div>
        <div className="rightSide">
          <div className="logoContainer">
            <p className="rightSideLogin">Login</p>
          </div>
          <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
            <input
              id="email"
              label="Email"
              type="email"
              className="textField"
              placeholder='Email'
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <p className='error-text'>Valid email is required.</p>}



            <input
              id="password"
              label="Password"
              type="password"
              className="textField"
              placeholder='Password'
              {...register("password", { required: true })}
            />
           {errors.password && <p className='error-text'>Password is required.</p>}

           {inValidPassword?<p className='error-text' >Enter Valid Password</p>:''}
            <div className="loginContainer">
              
              <button
                type="submit"
                className="loginBttn"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="language">
        <span className="languageColor"><a href="https://hi.quora.com/join?code=0&join_source=1&ref"> हिन्दी </a></span>  
      </div>
      <div className="loginFooter">
        <span className="footerLogin"> <a href="https://www.quora.com/about"> About </a></span>
        <span>&#8901;</span>
        <span className="footerLogin"> <a href="https://www.careers.quora.com/">Careers </a></span>
        <span>&#8901;</span>
        <span className="footerLogin"> <a href="https://www.quora.com/about/privacy">Privacy </a></span>
        <span>&#8901;</span>
        <span className="footerLogin"> <a href="https://www.quora.com/about/tos">Terms</a></span>
        <span>&#8901;</span>
        <span className="footerLogin"> <a href="https://help.quora.com/hc/en-us/requests/new">Contact </a></span>
        <span>&#8901;</span>
        <span className="footerLogin"><a href="https://www.quora.com/about/languages">Languages</a></span>
        <span>&#8901;</span>
        <span className="footerLogin"> <a href="https://www.quora.com/about/your_ad_choices">Your Ad Choices</a></span>
        <span>&#8901;</span>
        <span className="footerLogin">&copy; Quora-Clone</span>
      </div>
    </div>
  </div>
  )
}

export default Login