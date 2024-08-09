import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShimmerFeaturedGallery } from "react-shimmer-effects";
import '../App.css';
import NavbarDesktop from './NavbarDesktop';
import ImageGallery from './ImageGallary';
import CheckAvailability from './CheckAvailability';
import Rooms from './Room';
import OfferSection from './OfferSection';
import Calendar from './Calander';
import Review from './Review';
import MapContainer from './MapContainer';
import HostProfile from './HostProfile';
import config from '../config/config.json'

function HotelDetails() {
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 3000));

        const hotelResponse = await fetch(`${config.apiBaseUrl}/${slug}`);
        const roomsResponse = await fetch(`${config.apiBaseUrl}/hotel/${slug}/rooms`);

        if (!hotelResponse.ok || !roomsResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const hotelData = await hotelResponse.json();
        const roomsData = await roomsResponse.json();

        setHotel(hotelData);
        setRooms(roomsData);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchHotelData();
  }, [slug]);

  if (loading) {
    return (
      <div>
        <NavbarDesktop />
        <ShimmerFeaturedGallery />
        <ShimmerFeaturedGallery />
        <ShimmerFeaturedGallery />
      </div>
    );
  }

  if (error) return <div>{error}</div>;
  if (!hotel || !rooms) return <div>No data found</div>;

  return (
    <div>
      <NavbarDesktop />
      <ImageGallery imagesUrl={hotel.images} title={hotel.title} />
      <CheckAvailability 
        name={hotel.host_name}
        image={hotel.host_image}
        guestCount={hotel.guest_count} 
        bedroomCount={hotel.bedroom_count} 
        bathroomCount={hotel.bathroom_count}
        hotelDescription = {hotel.description}
      />
      <Rooms room={rooms} hotelSlug={slug} />
      <OfferSection amenities={hotel.amenities} />
      <Calendar />
      <Review />
      <MapContainer latitude={hotel.latitude} longitude={hotel.longitude} />
      <HostProfile 
        name={hotel.host_name} 
        image={hotel.host_image} 
        email={hotel.host_email} 
        phone={hotel.host_phone}
      />
    </div>
  );
}

export default HotelDetails;
