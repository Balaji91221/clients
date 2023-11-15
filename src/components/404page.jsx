
import React from 'react';
import notFoundImage from '../assets/Home/404.jpg'; 

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <img src={notFoundImage} alt="Not Found Image" className="mt-4 w-full h-80" />
        <h1 className="text-4xl font-bold text-gray-800">Page Not Found</h1>
        <p className="text-gray-600 mt-4">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
