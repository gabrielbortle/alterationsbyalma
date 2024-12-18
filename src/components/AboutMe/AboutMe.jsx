import React from 'react';
import Me from './Me.jpg'
import './AboutMe.css'; // Make sure to import the CSS file here

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <div className="about-me-content">
        <div className="about-me-image">
          <img src= { Me } alt="Alma Giron" />
          <h2>Alma Giron</h2>
          <h2>Owner / Seamstress</h2>
        </div>
        <div className="about-me-text">
          <h3>About Me</h3>
          <h3>
            Hello! My name is Alma. I am a professional seamstress and I have always been very
            passionate about sewing and other hand crafts. Sewing is a precious skill that was passed on to
            me by both my mother and grandmother. I personally consider it a superpower.
          </h3>

          <h3>
            I am committed to high-quality alterations and repairs with a focus on functionality and a
            “factory finished” look whenever possible. I can do anything from hemming or patching a pair
            of pants, changing a jacket zipper to custom sizing any garment to make you look your best.
          </h3>

          <h3>
            My family has been in the Valley since 2019 after we fell in love with both its beauty and the
            warm community. My goal is to be of service to our community members and to get to know
            as many of you as possible.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
