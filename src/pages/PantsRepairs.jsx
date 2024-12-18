import React from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard'; // Import the ServiceCard component
import pantsImage from '../assets/pantsBack.jpg'

const PantRepairs = () => {
  const pricing = [
    { service: 'Basic Cut & Sewn Hem', price: '$25' },
    { service: 'Original Hem*', price: '$35' },
    { service: 'Blind/Cuffed/ Wide Hem*', price: '$30+' },
    { service: 'Ski Pants Sewn Hem*', price: '$60+' },
    { service: 'Waist Take-In/Let-out*', price: '$45+' },
    { service: 'Leg Taper*', price: '$35+' },
    { service: 'Zipper Replacement', price: '$35+' },
    { service: 'Adding Fabric to Lengthen', price: '$35' },
    { service: '* Items with Additional Lining', price: '$10' },
  ];

  return (
    <div>
      <ServiceCard
        title="Pants Repairs"
        pricing={pricing}
        imageUrl={pantsImage} // Replace with the correct image path
      />
    </div>
  );
};

export default PantRepairs;
