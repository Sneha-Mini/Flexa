import React, { useState } from 'react';
import './LandingNavbar.css';
import { Link } from 'react-router-dom';
import loginimg from './assets/profile.png';

const LandingNavbar = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeDropdown();
    }
  };
  return (
    <nav className="landing-navbar">
      <div className="landing-logo-container">
        <span className="landing-logo">FLEXA</span>
      </div>
      <div className="landing-nav-links">
        <ul>
        <li><a className="atag" onClick={() => scrollToSection('hero')}>Home</a></li>
          <li><a className="atag" onClick={() => scrollToSection('exercise')}>Exercise</a></li>
          <li className="landing-profile" onClick={handleProfileClick}>
            <img src={loginimg} alt="Profile" />
            {showDropdown && (
              <div className="landing-dropdown-menu">
              <div >{props.name}<br/>{props.email}</div>
              <div><Link to="/Main" className="name-email" >logout</Link></div>
            </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LandingNavbar;
