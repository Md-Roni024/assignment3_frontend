import React from 'react';
import './OfferSection.css';

const OfferSection = ({ amenities }) => {
  return (
    <div>
      <div className="offer-items">
        <h1>What this place offers</h1>
        <div className="items-grid">
          {amenities.map((amenity, index) => (
            <div className="items" key={index}>
              ✓ {amenity}
            </div>
          ))}
        </div>
        <a href="#" className="show-all-button">Show all amenities</a>
        <hr className="divider-2" />
      </div>
    </div>
  );
}

export default OfferSection;
