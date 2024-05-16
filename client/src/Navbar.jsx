import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    return (
      <>
        <nav className="navbar">
        <div className="logo-container">
          <span className="logo">FLEXA</span>
        </div>
        <div className={`nav-links ${showMenu ? 'active' : ''}`}>
          <ul>
            <li><a className="atag" href="#home">Home</a></li>
            <li><a className="atag"  href="#about">About us</a></li>
            <li><a className="atag"  href="#exercise">Exercise</a></li>
            <li><a className="atag"  href="#services">Service</a></li>
            <li><a className="atag"  href="#contact">Contact</a></li>
            <li><Link to="/LoginPage"><button className="login-button-mobile">LOGIN</button></Link></li>
            <li><Link to="/SignupPage"><button className="signup-button-mobile">SIGN UP</button></Link></li>
          </ul>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
      </>
    )
}

export default Navbar;