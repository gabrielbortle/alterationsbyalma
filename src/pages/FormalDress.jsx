import React from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard'; // Assuming the path to your reusable component
import FormalBackImg from '../assets/formalBack.jpg'; // Replace with the correct path to your image

const FormalDressAlterations = () => {
  const pricing = [
    { service: 'Dress Sewn Hem - 2 Layers', price: '$60' },
    { service: 'Additional Layer', price: '$35' },
    { service: 'Dress Hem Extra Wide Additional', price: '$20' },
    { service: 'Shoulder, Sleeve, Collar Adjustments', price: '$40+' },
    { service: 'Add Cups, Elastic, Or Snaps', price: '$20' },
    { service: 'Strap Adjustment', price: '$25+' },
    { service: 'Bodice Adjustment', price: '$50' },
    { service: 'Bodice Adjustment with Lining', price: '$60' },
    { service: 'Bodice Adjustment with Boning', price: '$70' },
    { service: 'Bodice Adjustment with Beading', price: '$80' },
    { service: 'Waist / Hip Adjustment', price: '$50+' },
    { service: 'Waist Line Elevation', price: '$55' },
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
