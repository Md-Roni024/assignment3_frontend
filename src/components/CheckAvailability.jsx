import React from 'react';
import './CheckAvailability.css';
import img2 from './2.png';

const CheckAvailability = ({name,image,guestCount,bedroomCount,bathroomCount,hotelDescription}) => {
  return (
    <div className="check-availability">
      <div className="host-onboard">
        <h2>Entire rental unit in Lima, Peru</h2>
        <p className="details">{guestCount} guests · {bedroomCount} bedroom · {bathroomCount} bath</p>
        <p><span className="new-tag">★ New</span></p>
        <hr className="divider-2" />
        <div className="host-info">
          <div>
            <img src={image} alt="Fernando" className="host-img" />
          </div>
          <div className="host-details">
            <h4>Hosted by {name}</h4>
            <p>Superhost · 7 years hosting</p>
          </div>
        </div>
        <hr className="divider-2" />
        <div className="feature">
          <span className="feature-icon">🔑</span>
          <div className="feature-details">
            <h4>Self check-in</h4>
            <p>Check yourself in with the smartlock.</p>
          </div>
        </div>
        <div className="feature">
          <span className="feature-icon">🏅</span>
          <div className="feature-details">
            <h4>{name} is a Superhost</h4>
            <p>Superhosts are experienced, highly rated hosts.</p>
          </div>
        </div>
        <hr className="divider-2" />
        <div className="translation-notice">
          Some info has been automatically translated. <a href="#" className="show-original">Show original</a>
        </div>
        {/* <p className="description">
          Welcome to our brand-new 1 bedroom apartment, in a quiet and central location next to a park!
        </p> */}
        <p className="description">
          It's conveniently located in Pueblo Libre, just 25min. away from the airport. Steps away from Clinica Stella Maris, Universidad Antonio Ruiz de Montoya, Instituto Británico, Hospital Santa Rosa, YMCA Peru and Alas Peruanas University. It's also very close to La ...
          {hotelDescription}
        </p>
        <a href="#" className="show-more">Show more</a>
        <hr className="divider-2" />
      </div>
      <div className="sidebar">
        <div className="booking-card">
          <p className="booking-title">Add dates for prices</p>
          <div className="date-inputs">
            <div className="date-input">
              <label htmlFor="check-in">CHECK-IN</label>
              <input type="text" id="check-in" placeholder="Add date" />
            </div>
            <div className="date-input">
              <label htmlFor="check-out">CHECKOUT</label>
              <input type="text" id="check-out" placeholder="Add date" />
            </div>
          </div>
          <select className="guests-dropdown">
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
            <option value="more">...</option>
          </select>
          <button className="check-availability-btn">Check availability</button>
        </div>
        <p className="report-link"><span>&#127988;</span><span className="report-text">Report this listing</span></p>
      </div>
    </div>
  );
};

export default CheckAvailability;
