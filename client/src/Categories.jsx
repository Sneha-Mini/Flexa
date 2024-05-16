import React from 'react';
import './Categories.css';

const Categories = () => {
  const scrollToSection = () => {
    const section = document.getElementById('exercise');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="categories" className="categories-section">
      <h2 className="categories-heading">Categories</h2>
      <div className="category-boxes">
        <button onClick={scrollToSection} style={{ background: 'none', border: 'none', cursor : 'pointer'}} ><div className="category-box4">
          <div className="category-content">
            <p className="category-text">Full Body</p>
          </div>
        </div>
        </button>
        <div className="category-box1">
          <div className="category-content">
            <p className="category-text">Arms</p>
          </div>
        </div>
        <div className="category-box2">
          <div className="category-content">
            <p className="category-text">Yoga</p>
          </div>
        </div>
        <div className="category-box3">
          <div className="category-content">
            <p className="category-text">Warm Up</p>
          </div>
        </div>
        <div className="category-box5">
          <div className="category-content">
            <p className="category-text">Lower Body</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
