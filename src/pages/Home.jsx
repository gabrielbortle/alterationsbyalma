import React from 'react';
import HomeHero from '../components/HomeHero/HomeHero';
import Welcome from '../components/Welcome/Welcome';
import ImageGrid from '../components/ImageGrid/ImageGrid';

const Home = () => {
  return (
    <div>
    <HomeHero />
      {/* Welcome Section */}
      <Welcome />

      {/* Image Grid Section */}
      <ImageGrid />
    </div>
  );
};

export default Home;
