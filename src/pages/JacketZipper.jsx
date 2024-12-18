import React from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard'; // Import the reusable ServiceCard component
import zipperImage from '../assets/zipperImage.jpg'

const JacketZipper = () => {
  const pricing = [
    { service: '1-10 Inches', price: '$45' },
    { service: '10-20 Inches', price: '$55' },
    { service: '20-30 Inches', price: '$65' },
    { service: 'Per Additional 10 Inches', price: '$10' },
    { service: 'Sleeve Shortening*', price: '$45' },
    { service: '* Items with Additional Lining', price: '$15' },
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
