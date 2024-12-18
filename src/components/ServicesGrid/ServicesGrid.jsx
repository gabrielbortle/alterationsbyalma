import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import './ServicesGrid.css';

// Importing images
import GeneralImg from './generalImage.jpg';
import PantsImg from './pantsrepairs.jpg';
import JacketImg from './jacketzipperrepairs.jpg';
import CasualImg from './casualFront.jpg';
import BridalImg from './bridalAlterations.jpg'
import FormalImg from './formalFront.jpg'
import FormalJacket from './formalJacket.jpg'

const ServicesGrid = () => {
  return (
    <div>
      <div className='services-container'>
        <div className="row-container">
          <div className="row-item">
            <div className="service-box">
              <Link to="/general-repairs" className="service-link">
                <h3>General Repairs & Patches</h3>
              </Link>
              <Link to="/general-repairs" className="service-link">
                <img src={GeneralImg} className="serviceImages" alt="General Repairs" />
              </Link>
              <p>Starting at $20</p>
            </div>
          </div>

          <div className="row-item">
            <div className="service-box">
              <Link to="/jacket-zipper-repairs" className="service-link">
                <h3>Jacket Zipper Repairs</h3>
              </Link>
              <Link to="/jacket-zipper-repairs" className="service-link">
                <img src={JacketImg} className="serviceImages" alt="Jacket Zipper" />
              </Link>
              <p>Starting at $35</p>
            </div>
          </div>
            <div className="row-item">
              <div className="service-box">
                <Link to="/pant-repairs" className="service-link">
                  <h3>Pants Repairs</h3>
                </Link>
                <Link to="/pant-repairs" className="service-link">
                  <img src={PantsImg} className="serviceImages" alt="Pants Repairs" />
                </Link>
                <p>Starting at $28</p>
              </div>
            </div>
        </div>



        <div className="row-container">
          

          <div className="row-item">
            <div className="service-box">
              <Link to="/casual-and-semi-profressional" className="service-link">
                <h3>Casual & Semi-Professional Wear</h3>
              </Link>
              <Link to="/casual-and-semi-profressional" className="service-link">
                <img src={CasualImg} className="serviceImages" alt="Casual Wear" />
              </Link>
              <p>Starting at $25</p>
            </div>
          </div>

          <div className="row-item">
            <div className="service-box">
              <Link to="/formal-dress-alterations" className="service-link">
                <h3>Formal Dress Alterations</h3>
              </Link>
              <Link to="/formal-dress-alterations" className="service-link">
                <img src={FormalImg} className="serviceImages" alt="Formal Dress" />
              </Link>
              <p>Starting at $25</p>
            </div>
          </div>
          <div className="row-item">
            <div className="service-box">
              <Link to="/formal-jacket-and-pants-alterations" className="service-link">
                <h3>Formal Jacket & Pants Alterations</h3>
              </Link>
              <Link to="/formal-jacket-and-pants-alterations" className="service-link">
                <img src={FormalJacket} className="serviceImages" alt="Formal Jacket & Pants" />
              </Link>
              <p>Starting at $28</p>
            </div>
          </div>

        </div>

      
      
      <div className="row-container">
        <div className="row-item">
          <div className="service-box">
            <h3>Bridal Alterations</h3>
            <img src={BridalImg} className="serviceImages" alt="Bridal Alterations" />
            <p>Estimates available upon request at Initial Fitting</p>
            <Link to="/contact" className="service-button">Contact Us</Link> {/* Link to contact page */}
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default ServicesGrid;
