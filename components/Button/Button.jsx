// components/Button.js
import React from 'react';

const Button = ({ text, color, backgroundColor, onClick, className = '',href, ...props }) => {
  const buttonStyle = {
    background: backgroundColor||'radial-gradient(142.86% 141.63% at 50% -37.5%, #565656 0%, #262626 100%)',
    // backgroundColor: backgroundColor || 'blue', 
    color: color || 'white',                   
    padding: '12px 16px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
   
  };


  return (
    <button
      className={`custom-button ${className}`}
      style={buttonStyle}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
