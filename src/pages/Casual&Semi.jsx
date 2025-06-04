import React from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard'; // Import the reusable ServiceCard component
import DressImage from '../assets/casualBack.jpg'; // Replace with the correct path to your image

const CasualSemiAlterations = () => {
  const pricing = [
    { service: 'Dress Hem ( Depending on fullness ) *', price: '$25+' },
    { service: 'Shirt / Blouse Hem*', price: '$15+' },
    { service: 'Curved Hem or Vented additional*', price: '$10' },
    { service: 'Dress shirts with Flat Felled Seams*', price: '$35+' },
    { service: 'Collar Adjustments ( Shirt, Dress )', price: '22+' },
    { service: 'Shoulder Adjustments*', price: '$22+' },
    { service: 'Waist Take-In / Let-Out*', price: '$25+' },
    { service: 'Tapering Sides (Shirt, Dress, Blouse)*', price: '$20' },
    { service: 'Sleeve Shortening - Plain or Cuffed', price: '$15-28' },
    { service: 'Zipper Replacement', price: '$25+' },
    { service: 'Adding Darts*', price: '$20+' },
    { service: 'Shortening Straps*', price: '$15' },
    { service: 'Add pockets (fabric $5 extra)', price: '$25' },


    { service: '* Items with Additional Lining', price: '$10' },
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
