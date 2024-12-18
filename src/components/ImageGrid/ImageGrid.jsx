import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './ImageGrid.css';
import image1 from './imagegrid1.jpg'; // Import the first image
import image2 from './imagegrid2.jpg'; // Import the second image

const ImageGrid = () => {
  return (
    <div className="image-container">
      <div className="image-item">
        <Link to="/services" className="round-image">
          <img src={image1} alt="Services" />
        </Link>
        <div className="image-text">Services</div>
      </div>
      <div className="image-item">
        <Link to="/bags" className="round-image">
          <img src={image2} alt="Bags" />
        </Link>
        <div className="image-text">Bags</div>
      </div>
    </div>
  );
};

export default ImageGrid;
