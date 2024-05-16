import React , {useState} from 'react'
import LandingNavbar from '../LandingNavbar'; 
import Categories from '../Categories'
import LandingExercise from '../LandingExercise';
import LandingFooter from '../LandingFooter';
import './LandingPage.css'
import Button from '../Button'; 
import Axios from 'axios';
import image from '../assets/image4.jpg';
import { Link, useLocation }  from 'react-router-dom';


function LandingPage() {
  const {state} = useLocation();
  const {email} = state;
  const [name, setName] = useState('');
  const [bmi, setBmi] = useState('');
  const [bmiCategory, setBmiCategory] = useState('');
  if (email) {
      Axios.get(`http://localhost:3000/getName?email=${email}`)
        .then(response => {
          setName(response.data.name);
          setBmi(response.data.bmi);
          if (bmi < 18.5) {
              setBmiCategory('it indicates that you are underweight. It is important to focus on a balanced diet and regular exercise to achieve a healthy weight.');
          } else if (bmi >= 18.5 && bmi < 25) {
              setBmiCategory('Congratulations! it falls within the normal range. Keep up the good work with healthy lifestyle habits to maintain your optimal weight.');
          } else {
              setBmiCategory('it suggests that you are overweight. It is a good time to focus on making healthy changes to your diet and exercise routine to reduce health risks.');
          } 
        })
        .catch(error => {
          console.error("Error fetching name:", error);
        });
    }
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        closeDropdown();
      }
    };
  return (
    <div>
       <LandingNavbar email={email} name={name} ></LandingNavbar>
      <section id="hero" className="hero-section">
        <div className="left-column">
        <h1 className="hero-heading"><p className='smallheading'>Flexa</p>Welcome {name}, to FLEXA Fitness!</h1>
          <p className="paragraph">Your BMI is {bmi} {bmiCategory} Start your fitness journey today with personalized exercise plans. Click the button below to begin.</p>
          <Button onClick={() => scrollToSection('exercise')} text="Start Exercise" />
        </div>
        <div className="right-column2" >
          <img src={image} alt="Fitness" className="hero-image" /> 
        </div>
      </section>
      <Categories></Categories>
      <LandingExercise bmi = {bmi} ></LandingExercise>
      <div className="horizontal-line"></div>
      <LandingFooter></LandingFooter>
    </div>
  )
}

export default LandingPage;