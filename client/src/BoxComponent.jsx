import React from 'react';
import './BoxComponent.css';
import { Link} from 'react-router-dom';

const BoxComponent = ({ heading, description, buttonText, imageUrl }) => {
  return (
    <div className="box">
      <div className="box-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="boxcontent">
        <h3 className="boxheading">{heading}</h3>
        <p className="box-description">{description}</p>
        <Link to="/LoginPage"><button className="start-workout-button">{buttonText}</button></Link>
      </div>
    </div>
  );
};

export default BoxComponent;
