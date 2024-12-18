import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/contact" className="btn-primary">Book an Appointment</Link>
            <Link to="/services" className="btn-secondary">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
