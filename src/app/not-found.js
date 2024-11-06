import React from "react";
import notFoundImage from "../assets/icons/404-not-found.png"; 

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <img 
        src={notFoundImage} 
        alt="Page Not Found" 
        className="w-64 mb-5"
      />
      <div className="text-2xl font-bold text-gray-800">Page doesn't exist</div>
    </div>
  );
};

export default NotFound;
