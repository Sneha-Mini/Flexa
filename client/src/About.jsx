import React from 'react';
import Button from './Button'; 
import './About.css'; 
import image from './assets/image2.png'; 
import { Link} from 'react-router-dom';

const About = () => {
  return (
    <div id="about" class="anchor-spacer" >
    <section  className="about-section">
      <div className="about-left-column" >
      <img src={image} alt="Fitness" className="about-image" />
      </div>
      <div className="about-right-column">
        <p className="smallheading">About us</p>
        <h1 className="heading">Result Together</h1>
        <p className="paragraph">
        At Result Together, we believe in the power of community-driven fitness. Our mission is to unite individuals in their pursuit of wellness, fostering a supportive environment where every achievement is celebrated and every milestone is shared. 
        <br/><br/> Join us as we embark on this journey together, towards a healthier, happier lifestyle.
        </p>
        <Link to="/LoginPage">
        <Button text="JOIN NOW" />
      </Link>
      </div>
      <div className="about-right-responsive">
        <img src={image} alt="About Us" className="about-image" />
      </div>
    </section>
    </div>
  );
};

export default About;

