import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="intro">
        <h1>Welcome to Alterations by Alma!</h1>  {/* Main heading with <h1> */}
        <p>
          Alterations by Alma offers <strong>Professional Tailoring & Repair</strong> services here in Cache Valley. 
          Our focus is to work one-on-one with clients to make them look their best!
        </p> {/* Description as <p> for better semantic structure */}
      </div>
    </div>
  );
};

export default Welcome;
