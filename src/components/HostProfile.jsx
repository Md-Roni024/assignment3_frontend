import React from 'react';
import './HostProfile.css';
import host from './roni_profile.jpg';
import hotelData from '../components/config/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons'



const HostProfile = ({ name, image, email, phone }) => {
    return (
        <>
        <div className="host-profile">
            <h2>Meet your Host</h2>
            <div className="profile-container">
                <div className="left-card">
                    <div className="profile-card">
                      <div>
                          <img src={image} alt="Image Not Found" className="profile-image"/>
                          <h3>{name}</h3>
                          <p className="superhost">✓ {email}</p>
                          <p className="superhost">✓ {phone}</p>
                      </div>
                      <div className="stats">
                          <div>
                            <strong>310</strong>
                            <span>Reviews</span>
                          </div>
                          <hr className="divider-4"/>
                          <div>
                            <strong>4.92★</strong>
                            <span>Rating</span>
                          </div>
                          <hr className="divider-4"/>
                          <div>
                            <strong>7</strong>
                            <span>Years hosting</span>
                          </div>
                        </div>
                    </div>
                <div className="right-card">
                <span><FontAwesomeIcon icon={faUser} className="amenity-icon-card" /> Born in the 80s</span><br/>
                <span><FontAwesomeIcon icon={faBriefcase} className="amenity-icon-card" /> My work: Hospitality</span>
                    <p className="bio">Hello world! I love traveling and I also love welcoming guests in my home country, Perú, meeting new...</p>
                    <a href="#" className="show-more">Show more</a>
                </div>
            </div>
              <div className="host-info-card">
                <div className="superhost-info">
                  <h4>{name} is a Superhost</h4>
                  <p>{hotelData.superhost_info}</p>
                </div>
                <div className="co-hosts">
                  <h4>Co-hosts</h4>
                  <div className="co-host-avatars">
                    {/* <img src={host}alt="Percy" title="Percy"/>
                    <span className="co-host-name">Percy</span> */}
                    <div className="avatar-placeholder">R</div>
                    <span className="co-host-name">Raul</span>
                    <div className="avatar-placeholder">A</div>
                    <span className="co-host-name">Abdullah</span>
                  </div>
                </div>
                <div className="host-details">
                  <h4>Host details</h4>
                  <p>Response rate: 100%</p>
                  <p>Responds within an hour</p>
                </div>
                <button className="message-host">Message Host</button>
              </div>
            </div>
            <hr className="divider-1"/>
    
          </div>
        </>
    );
  };
  
  export default HostProfile;