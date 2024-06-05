import React from 'react';

const BLogCard = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <img src="/path-to-your-image/image.png" alt="Dashboard" className="w-full rounded-lg mb-4" />
      <div className="text-sm font-semibold text-gray-400 mb-2">PRODUCT UPDATES</div>
      <h2 className="text-2xl font-bold mb-4">Dashboard refinements and a free plan for Comments</h2>
      <div className="flex items-center">
        <img 
          src="https://via.placeholder.com/40" 
          alt="User Avatar" 
          className="w-10 h-10 rounded-full mr-2" 
        />
        <div className="text-sm">January 12th, 2024</div>
      </div>
    </div>
  );
};

export default BLogCard;
