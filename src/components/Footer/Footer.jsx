import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footerNav">
        <ul>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="grid-container">
          <div className="info">
            <h3>Location</h3>
            <p>30 W Birch Circle</p>
            <p>Victor ID, 83455</p>
            <p>*Appointment Only*</p>
            <p>*Drop Box Available*</p>
            <h2>Make an appointment!</h2>
            <h3>Alma Giron</h3>
            <p>(817) 793 - 2008</p>
          </div>
        </div>
        <div className="footerBottom">
          <p>&copy; Alterations By Alma</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;