// src/components/ui/CustomeText.jsx

import React from 'react';

const CustomeText = ({ title, className = '' }) => {
  return (
    <div className={`leading-tight ${className}`}>
      {title}
    </div>
  );
};

export default CustomeText;
