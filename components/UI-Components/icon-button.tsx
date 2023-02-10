import React from "react";

const IconButton = ({ children, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`hover:bg-gray-300 hover:ring-1 ring-gray-200 text-gray-500 font-bold rounded-lg  
        ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
