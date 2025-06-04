import React from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard'; // Import the ServiceCard component
import FormalPants from '../assets/formalPants.jpg'; // Replace with the actual image path

const FormalJacketPants = () => {
  const pricing = [
    { service: 'Blind / Cuffed Hem', price: '$25' },
    { service: 'Leg Tapering', price: '$40+' },
    { service: 'Pants Waist Take-In / Let-Out', price: '$40' },
    { service: 'Stride/Inner Thigh Adjustment Only', price: '$40+' },
    { service: 'Jacket Waist Take-In/Let-Out', price: '$45-60' },
    { service: 'Shoulder Adjustment', price: '$80' },
    { service: 'Sleeve Taper', price: '$35+' },
    { service: 'Sleeve Shortening plain no buttons', price: '$40' },
    { service: 'Sleeve Shortening plain with buttons', price: '$50' },
    { service: 'Shortening Jacket Length', price: '$50' },
    { service: 'Vest Hem Shortening', price: '$25' },
    { service: 'Vest Sides Adjusting', price: '$20' },
    { service: 'Vest Shoulder Adjustment', price: '$22' },

  ];

  return (
    <div>
      <ServiceCard
        title="Formal Jacket, Coat, Blazer, Vest & Pants Alterations"
        serviceName="Formal Jacket, Coat, Blazer, & Pants Alterations"
        pricing={pricing}
        imageUrl={FormalPants} // Replace with the correct image path
      />
    </div>
  );
};

export default FormalJacketPants;
