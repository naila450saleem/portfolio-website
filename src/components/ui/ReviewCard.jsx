import React from "react";
import { Star } from "lucide-react";
import "./ReviewCard.css";

const ReviewCard = ({ name, role, rating, text }) => {
  return (
    <div className="review-card">
      {/* Header with Avatar and Info */}
      <div className="review-header">
        {/* Avatar */}
        <div className="review-avatar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FCFCFD"
            className="review-avatar-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3s-4.5 2.015-4.5 4.5S9.515 12 12 12zM4.5 21c0-3.314 3.357-6 7.5-6s7.5 2.686 7.5 6"
            />
          </svg>
        </div>

        {/* Name and Role */}
        <div className="review-info">
          <h3 className="review-name">{name}</h3>
          <span className="review-role">{role}</span>
        </div>
      </div>

      {/* Rating Section */}
      <div className="review-rating">
        <div className="review-stars">
          {[...Array(rating)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className="review-star-icon" 
              fill="#FD853A" 
              stroke="#FD853A" 
            />
          ))}
        </div>
        <span className="review-score">{rating}</span>
      </div>

      {/* Review Text */}
      <p className="review-text">
        {text}
      </p>
    </div>
  );
};

export default ReviewCard;
