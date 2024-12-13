import { faStar, faStarHalfAlt, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export const StarRating = ({ rating }) => {
   // Function to render full, half, or empty stars based on the rating
   const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const fullStarValue = index + 1; // 1, 2, 3, 4, 5
      const isFull = rating >= fullStarValue;
      const isHalf = !isFull && rating >= fullStarValue - 0.5;

      return (
        <span key={index}>
          {isFull ? (
            <i className="fa-solid fa-star"  style={{ color: 'gold' }}></i>
          ) : isHalf ? (
            <FontAwesomeIcon icon={faStarHalfAlt} style={{ color: 'gold' }} />
          ) : (
            <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
            
          )}
        </span>
      );
    });
  };

  return <div style={{ display: 'flex' }}>{renderStars()}</div>;
};

