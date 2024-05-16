import React from 'react';
import './Button.css'; // Import your CSS file for styling if needed

const Button = ({ text, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
