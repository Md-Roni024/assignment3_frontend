import React from 'react';
import './MapContainer.css';
import map from './map_per.png';


const MapContainer = () => {
    return (
        <div className="map-container">
            <div className="map-heading">
                <h2>Where you’ll be</h2>
                <p>Lima, Provincia de Lima, Peru</p>
            </div>
            <img src={map} style={{ width: '1150px' }} className="map-image" alt="Map of Lima, Peru" />
            <img src={map} className="map-image-mobile" alt="Mobile Map of Lima, Peru" />
            <a href="#" className="show-more">Show more &gt;</a>
            <hr className="divider-1" />
        </div>
    );
};

export default MapContainer;
