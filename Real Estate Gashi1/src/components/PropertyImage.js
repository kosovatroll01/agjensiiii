import React from 'react';
import propertyImage from '../assets/images/property-house.jpg'; // Imazhi i pronës

function PropertyImage() {
  return (
    <div className="text-center my-4">
      <h2>Prona e Disponueshme</h2>
      <img src={propertyImage} alt="House" className="property-image" />
    </div>
  );
}

export default PropertyImage;
