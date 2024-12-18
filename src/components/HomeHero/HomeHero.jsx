import React from 'react';
import './HomeHero.css';
import background from './background.jpg'; // Import the image

const HomeHero = () => {
  return (
    <section
      className="home-hero"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Alterations By Alma</h1>
          <p>Perfect Fit, Every Time</p>
          <div className="hero-buttons">
            <a href="/contact" className="btn-primary">Book an Appointment</a>
            <a href="/services" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
