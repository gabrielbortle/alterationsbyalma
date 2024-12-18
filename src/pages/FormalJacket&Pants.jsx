import React from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard'; // Import the ServiceCard component
import JacketImage from '../assets/DRESSIMAGE.jpg'; // Replace with the actual image path

const FormalJacketPants = () => {
  const pricing = [
    { service: 'Blind / Cuffed Hem', price: '$40' },
    { service: 'Leg Tapering', price: '$45+' },
    { service: 'Pants Waist Take-In / Let-Out', price: '$50' },
    { service: 'Stride/Inner Thigh Adjustment Only', price: '$45+' },
    { service: 'Jacket Waist Take-In/Let-Out', price: '$70' },
    { service: 'Shoulder Adjustment', price: '$25+' },
    { service: 'Sleeve Taper', price: '$35+' },
    { service: 'Sleeve Shortening', price: '$60' },
    { service: 'Shortening Jacket Length', price: '$65' },
  ];

  return (
    <div>
      <ServiceCard
        title="Formal Jacket, Coat, Blazer, & Pants Alterations"
        serviceName="Formal Jacket, Coat, Blazer, & Pants Alterations"
        pricing={pricing}
        imageUrl={JacketImage} // Replace with the correct image path
      />
    </div>
  );
};

export default FormalJacketPants;
