import React from "react";
import "./OrangeButton.css";

const OrangeButton = ({
  title,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`orange-button ${className}`}
    >
      {title}
    </button>
  );
};

export default OrangeButton;
