import React from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard'; // Import the reusable ServiceCard component
import DressImage from '../assets/casualBack.jpg'; // Replace with the correct path to your image

const CasualSemiAlterations = () => {
  const pricing = [
    { service: 'Dress Hem ( Depending on fullness ) *', price: '$35+' },
    { service: 'Shirt / Blouse Hem*', price: '$25' },
    { service: 'Curved Hem or Vented additional*', price: '$10' },
    { service: 'Dress shirts with Flat Felled Seams*', price: '$45+' },
    { service: 'Collar Adjustments ( Shirt, Dress )', price: '$30+' },
    { service: 'Shoulder Adjustments*', price: '$35+' },
    { service: 'Waist Take-In / Let-Out*', price: '$45+' },
    { service: 'Tapering Sides (Shirt, Dress, Blouse)*', price: '$35' },
    { service: 'Sleeve Shortening - Plain or Cuffed', price: '$25' },
    { service: 'Move Placket', price: '$50' },
    { service: 'Zipper Replacement', price: '$30+' },
    { service: 'Adding Darts*', price: '$25' },
    { service: '* Items with Additional Lining', price: '$15' },
  ];

  return (
    <div>
      <ServiceCard
        title="Everyday Casual & Semi-Professional Wear Alterations"
        serviceName="Casual Wear Alterations"
        pricing={pricing}
        imageUrl={DressImage} // Replace with the correct image path
      />
    </div>
  );
};

export default CasualSemiAlterations;
