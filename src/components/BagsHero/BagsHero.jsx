import React from "react";
import "./BagsHero.css"; // Make sure to style the component

const BagsHero = () => {
  return (
    <section className="bags-hero">
        <div className="bags-hero-content">
          <h1 className="hero-heading">Explore Our Exclusive Bags Collection</h1>
          <p className="hero-subheading">Handcrafted designs made to elevate your style</p>
        </div>
      <div className="bags-hero-overlay"></div>
    </section>
  );
};

export default BagsHero;
