import React from 'react';
import './RoomCard.css';

const RoomCard = ({ roomdata }) => {
  return (
    <div className="room-display">
      {roomdata.map((room, index) => (
        <div key={index} className="room-card">
          <div className="room-image">
            <img src={room.room_image} alt={room.title} />
          </div>
          <div className="room-info">
            <h2>{room.name}</h2>
            <div className="room-details">
              <span className="room-size">{room.size} m²</span>
              <span className="wifi-info">Free WiFi</span>
            </div>
            <p>Room size {room.size} m²</p>
            <p className="comfort-rating">Comfy beds {room.comfortRating} - Based on {room.reviewCount} reviews</p>
            <p>The unit offers {room.bedCount} bed.</p>
            <p className="smoking-info">Smoking: {room.smoking ? 'Allowed' : 'No smoking'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomCard;