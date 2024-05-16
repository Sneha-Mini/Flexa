import React from 'react';
import './LandingFooter.css'; // Import your CSS file for styling if needed
import face from './assets/facebook.png';
import insta from './assets/instagram.png';
import youtube from './assets/youtube.png';

function LandingFooter() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          closeDropdown();
        }
      };
  return (
    <div>
        <div className="footer1">
        <div className="column1">
            <h2 className="footer-heading">FLEXA</h2>
            <p className="footer-paragraph">Empowering Your Fitness Journey, Every Step of the Way</p>
        </div>
        <div className="column">
            <h2 className="footer-heading">Our World</h2>
            <ul className="footer-list">
            <li><a className="atag" onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a className="atag" onClick={() => scrollToSection('exercise')}>Exercise</a></li>
            </ul>
        </div>
        <div className="column1">
            <h2 className="footer-heading">Services</h2>
            <ul className="footer-list">
            <li><a className="atag" onClick={() => scrollToSection('categories')}>Full Body</a></li>
            <li><a className="atag" onClick={() => scrollToSection('categories')}>Muscles</a></li>
            <li><a className="atag" onClick={() => scrollToSection('categories')}>Arms and Legs</a></li>
            </ul>
        </div>
        <div className="column1">
            <h2 className="footer-heading">Follow Us</h2>
            <p className="footer-paragraph" >Get the latest updates and fitness tips by following our social channels.</p>
            <div className="social-icons">
            <a href="https://www.facebook.com/"><img src={face} alt="Social Media Icon" /></a>
            <a href="https://www.instagram.com/"><img src={insta} alt="Social Media Icon" /></a>
            <a href="https://www.youtube.com/"><img src={youtube} alt="Social Media Icon" /></a>
            </div>
        </div>
        </div>
        <div className="end-footer">
        <p className="end-footer-paragraph" >&copy; 2024 All Rights Reserved, FLEXA</p>
        </div>
    </div>
  );
}

export default LandingFooter;
