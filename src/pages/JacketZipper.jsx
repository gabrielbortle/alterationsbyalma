import React from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard'; // Import the reusable ServiceCard component
import zipperImage from '../assets/zipperImage.jpg'

const JacketZipper = () => {
  const pricing = [
    { service: 'Zipper Slider / Pull', price: '$15+' },
    { service: '1-10 Inches', price: '$35' },
    { service: '10-20 Inches', price: '$45' },
    { service: '20-30 Inches', price: '$55' },
    { service: 'Per Additional 10 Inches', price: '$10' },
    { service: 'Sleeve Shortening*', price: '$30' },
    { service: '* Items with Additional Lining', price: '$10' },
  ];

  return (
    <div>
      <ServiceCard
        title="Jacket Zipper Repairs"
        serviceName="Jacket Zipper Repairs"
        pricing={pricing}
        imageUrl={zipperImage} // Replace with the correct image path
      />
    </div>
  );
};

export default JacketZipper;
