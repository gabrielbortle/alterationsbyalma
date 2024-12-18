import React from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard'; // Import the ServiceCard component
import GeneralImage from '../assets/generalrepairs.jpg'


const GeneralRepairs = () => {
  const pricing = [
    { service: 'Seam Repair (torn garment)', price: '$20+' },
    { service: 'Replace Button or Snap', price: '$15' },
    { service: 'Replace Additional Button or Snap', price: '$5' },
    { service: 'Zipper Slider/Pull', price: '$20+' },
    { service: 'Patch - Sewn (small)', price: '$25' },
    { service: 'Patch - Sewn (large)', price: '$30' },
    { service: 'Elbow Patch(Patch Included)', price: '$40' },
  ];

  return (
    <div>
      <ServiceCard
        title="General Repairs & Patches"
        serviceName="General Repairs & Patches"
        pricing={pricing}
        imageUrl= {GeneralImage} // Replace with the correct image path
      />
    </div>
  );
};

export default GeneralRepairs;
