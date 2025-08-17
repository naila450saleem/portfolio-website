import React from "react";
import "./ServicesCard.css";

const ServicesCard = ({ title, imageSrc }) => {
  return (
    <div className="services-card">
      {/* Title (absolute top) */}
      <h1 className="services-title">
        <span className="services-title-text">{title}</span>
      </h1>

      {/* Decorative Backgrounds */}
      <div className="services-bg-dark"></div>
      <div className="services-bg-light"></div>

      {/* Image */}
      <img
        src={imageSrc}
        alt="Card Image"
        className="services-image"
      />
    </div>
  );
};

export default ServicesCard;
