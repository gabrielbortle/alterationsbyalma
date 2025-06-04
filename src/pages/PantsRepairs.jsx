import React from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard'; // Import the ServiceCard component
import pantsImage from '../assets/pantsBack.jpg'

const PantRepairs = () => {
  const pricing = [
    { service: 'Basic Cut & Sewn Hem ( wide + $5 )', price: '$15' },
    { service: 'Original Hem* ( Wide +5 )', price: '$20' },
    { service: 'Blind / Cuffed', price: '$20+' },
    { service: 'Ski Pants Sewn Hem*', price: '$45+' },
    { service: 'Waist Take-In/Let-out* ( Seat/rise )', price: '$36' },
    { service: 'Seat Only ', price: '$36' },
    { service: 'Leg Taper*', price: '20' },
    { service: 'Zipper Replacement', price: '$25' },
    { service: 'Adding Fabric to Lengthen', price: '$20' },
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
