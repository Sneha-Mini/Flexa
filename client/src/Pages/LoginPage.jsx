import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'; 
import Button from '../Button';
import loginimg from '../assets/bg.jpg'
import Axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const [errorMessage3, setErrorMessage3] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email) {
      setErrorMessage2('Please enter your email.');
      return;
    }else if (!password) {
      setErrorMessage3('Please enter your password.');
      return;
    }
    Axios.get(`http://localhost:3000/checkUser?email=${email}&password=${password}`).then(response => {
      if (response.data.exists) {
        navigate("/LandingPage" , {state : {email : email}})
      }else{
        setErrorMessage("Invalid EmailID or Password");
      }
    })
    .catch(error => {
      console.error("Error fetching user data:", error);
      setErrorMessage("Failed to fetch user data. Please try again later.");
    });
   
  }

  return (
    <div className="login-container">
    <div className="left-column1">
      <div className="left-content">
      <h1 className="flexa" >FLEXA</h1>
      <h1 className="get-started-heading">Welcome Back</h1>
      <p className="credentials-text">Enter your credentials to access your account</p>
      <label htmlFor="email">Email</label>
      <input type="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email'/>
      {!email && errorMessage2 && <p className="error-message">{errorMessage2}</p>}
      <label htmlFor="password">Password</label>
      <input type="password"   value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='Enter password' id="password" />
      {!password  && errorMessage3 && <p className="error-message">{errorMessage3}</p>}
      <Button  onClick={handleSubmit} text="Login" /> 
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p className="signup-text">Don’t have an account?  <Link to="/SignupPage" className="link">Sign up</Link></p>
      </div>
    </div>
    <div className="right-column1">
      <img src={loginimg} alt="Image" className="login-image" />
    </div>
  </div>
  );
}

export default LoginPage;
