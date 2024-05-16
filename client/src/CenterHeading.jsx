import React from 'react';
import './CenterHeading.css'; // Import your CSS file for styling if needed

const CenterHeading = ({ heading, paragraph, description }) => {
  return (
    <div  className="center">
      <p className="center-paragraph">{paragraph}</p>
      <h2 className="center-heading">{heading}</h2>
      <p className="center-description">{description}</p>
    </div>
  );
};

export default CenterHeading;
