import React from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard'; // Assuming the path to your reusable component
import FormalBackImg from '../assets/formalBack.jpg'; // Replace with the correct path to your image

const FormalDressAlterations = () => {
  const pricing = [
    { service: 'Dress Sewn Hem - First Layer', price: '$35' },
    { service: 'Additional Layer', price: '$20' },
    { service: 'Dress Hem Extra Wide Additional', price: '$10' },
    { service: 'Shoulder, Sleeve, Collar Adjustments', price: '$30+' },
    { service: 'Add Cups, Elastic, Or Snaps', price: '$15' },
    { service: 'Strap Adjustment', price: '$15' },
    { service: 'Bodice Adjustment', price: '$45' },
    { service: 'Bodice Adjustment with Lining', price: '$55' },
    { service: 'Bodice Adjustment with Boning', price: '$65' },
    { service: 'Bodice Adjustment with Beading', price: '$75' },
    { service: 'Waist / Hip Adjustment', price: '$40+' },
    { service: 'Waist Line Elevation', price: '$45' },
    { service: 'Add Modesty Coverage', price: '$35-60' },

  ];

  return (
    <div>
      <ServiceCard
        title="Formal Dress Alterations"
        serviceName="Formal Dress Alterations"
        pricing={pricing}
        imageUrl={FormalBackImg} // Image for the service
      />
      
    </div>
  );
};

export default FormalDressAlterations;
