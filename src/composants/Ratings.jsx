// src/components/Ratings.jsx
import React from 'react';
import StarActive from '../assets/images/star-active 1.png';
import StarInactive from '../assets/images/star-inactive 1.png';

function Ratings({ rating, starCount = 5 }) {
    return (
        <div className='ratings'>
            {[...Array(starCount)].map((_, index) => (
                <img 
                    key={index}
                    src={index < rating ? StarActive : StarInactive}
                    alt={`Star ${index + 1}`}
                    className='star'
                />
            ))}
        </div>
    );
}

export default Ratings;
