import React from 'react';
import './ServiceCard.css'; // Create a separate CSS file for styles

const ServiceCard = ({ title, serviceName, pricing, imageUrl }) => {
  return (
    <div className="service-card">
      <h2 className="service-title">{title}</h2> {/* New title */}
      <div className="service-content">
        <div className="service-image">
          <img src={imageUrl} alt={serviceName} />
        </div>
        <div className="service-details">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((item, index) => (
                <tr key={index}>
                  <td>{item.service}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
