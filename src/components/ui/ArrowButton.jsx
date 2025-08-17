import React from "react";
import "./ArrowButton.css";

const ArrowButton = ({
  className = "",
  height = 48,
  width = 48,
  rotate = 0,
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className={`arrow-button-container ${className}`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <svg
        width={height / 2}
        height={height / 2}
        viewBox="0 0 24 24"
        className="arrow-icon"
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </div>
  );
};

export default ArrowButton;
