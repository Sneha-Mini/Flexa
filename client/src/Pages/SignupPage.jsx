import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css'; 
import Axios from 'axios'
import Button from '../Button';
import loginimg from '../assets/gym.jpg'

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessage1, setErrorMessage1] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const [errorMessage3, setErrorMessage3] = useState('');
  const [errorMessage4, setErrorMessage4] = useState('');
  const [errorMessage5, setErrorMessage5] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name) {
      setErrorMessage1('Please enter your name');
      return;
    }else if (!email) {
      setErrorMessage2('Please enter your email.');
      return;
    }else if (!password) {
      setErrorMessage3('Please enter your password.');
      return;
    }else if (!height) {
      setErrorMessage4('Please enter your height.');
      return;
    }else if (!weight) {
      setErrorMessage5('Please enter your weight.');
      return;
    }
    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    const bmi = calculatedBMI.toFixed(2);
    Axios.get(`http://localhost:3000/checkEmail?email=${email}`).then(response => {
      if (response.data.exists) {
        setErrorMessage("Email already exists");
      }else{
        console.log("Singup Successful");
        Axios.post("http://localhost:3000/Signup", {name : name , email : email , password : password, height : height, weight : weight, bmi : bmi})
        navigate("/LandingPage" , {state : {email : email}})
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
      <h1 className="get-started-heading">Get Started Now</h1>
      <p className="credentials-text">Enter your credentials to access your account</p>
      <label htmlFor="name">Name</label>
      <input type="text" id="name"  value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name' />
      {!name && errorMessage1 && <p className="error-message">{errorMessage1}</p>}
      <label htmlFor="email">Email</label>
      <input type="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
      {!email && errorMessage2 && <p className="error-message">{errorMessage2}</p>}
      <label htmlFor="password">Password</label>
      <input type="password" id="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
      {!password  && errorMessage3 && <p className="error-message">{errorMessage3}</p>}
      <label htmlFor="height" >Height</label>
      <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} id="height" placeholder='Enter Height in cm' required/>
      {!height && errorMessage4 && <p className="error-message">{errorMessage4}</p>}
      <label htmlFor="weight" >Weight</label>
      <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder='Enter Weight in kg' id="weight" required />
      {!weight && errorMessage5 && <p className="error-message">{errorMessage5}</p>}
      <Button  onClick={handleSubmit} text="Signup" />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p className="signup-text">Already have an account?  <Link to="/LoginPage" className="link">Login</Link></p>
      </div>
    </div>
    <div className="right-column1">
      <img src={loginimg} alt="Image" className="login-image" />
    </div>
  </div>
  );
}

export default SignupPage;
