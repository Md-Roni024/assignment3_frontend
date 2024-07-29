import React, { useEffect, useState } from 'react';
import './Room.css'; 
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
  // const [roomdata, setRoomData] = useState([]);

  const displayedRooms = room.slice(0, 3);
  return (
    <>
    <div>
      <div className="rooms">
        <h2>Where you'll sleep - Room Information</h2>
        <div className="room-container">
          {room.map((roomId, index) => (
            <div key={index} className="room-item">
            <div className="room-image-container">
              <img src={roomId.room_image} alt={roomId.room_title} className="room-image" />
            </div>
                <div className="room-details">
                  <h3 className="room-title">{roomId.room_title}</h3>
                  <div className="room-info">
                    <p>{roomId.bedroom_count} Bedrooms</p>
                    <p> {roomId.bath_count} Bathrooms</p>
                    <p>{roomId.guest_count} Guests</p>
                  </div>
                  <div className="room-price">
                    <span className="price-amount">{roomId.price} $</span>
                  </div>
                </div>
              </div>
          ))}
        </div>
        <hr className="divider-2" />
      </div>
    </div>
    </>
  );
}

export default Room;