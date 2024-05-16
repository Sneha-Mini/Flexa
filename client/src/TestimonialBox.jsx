import React from 'react';
import './TestimonialBox.css'; 

const TestimonialBox = ({ imageUrl, name, feedback }) => {
  return (
    <div className="testimonial-box" style={{ border: '2px solid #7342DC' }}>
      <div className="circle-image">
        <img src={imageUrl} alt="Profile" />
      </div>
      <div className="name">
        {name}
      </div>
      <div className="feedback">
        {feedback}
      </div>
    </div>
  );
};

export default TestimonialBox;
