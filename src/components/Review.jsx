import React from 'react';
import './Review.css'; 
import img2 from './2.png';


const Review = () => {
    return (
        <div className="reviews-section">
            <h2>No reviews (yet)</h2>
            <p>
                <span className="star-icon">★</span>
                This host has 310 reviews for other places to <br />&emsp;&emsp;stay. 
                <a href="#" className="show-reviews">Show other reviews</a>
            </p>
            <hr className="divider-2" />
        </div>
    );
};

export default Review;