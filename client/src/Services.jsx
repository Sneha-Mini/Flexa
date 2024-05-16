import React from 'react';
import './Services.css'; // Import your CSS file for styling if needed
import image from './assets/image3.png'; // Import your image

const Services = () => {
  return (
    <div id="services" class="anchor-spacer" >
    <section className="services-section">
      <div className="services-left-column">
      <p className="smallheading">Services</p>
      <h1 className="heading">Why Choose Us</h1>
        <p className="paragraph">
        Unlock your potential with our tailored fitness solutions and join a community dedicated to your success. <br/><br/>
        &#x2713; Personalized Fitness Plans<br/>
        &#x2713; Virtual Workshops<br/>
        &#x2713; Goal Tracking<br/>
        &#x2713; Diverse Class Offerings
        </p>
      </div>
      <div className="right-column">
        <img src={image} alt="Fitness" className="services-image" /> 
      </div>
    </section>
    </div>
  );
};


export default Services;

