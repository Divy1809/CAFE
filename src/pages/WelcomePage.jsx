import React from 'react';
import { Link } from 'react-router-dom';
import welcomeImage from '../assets/welcome.jpg'; // Adjust the path as necessary

const WelcomePage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-white bg-cover bg-center relative"
      style={{ backgroundImage: `url(${welcomeImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <h1 className="text-8xl font-bold text-center mb-6 relative">No Grill</h1>
      <p className="text-lg text-gray-300 mb-8 relative">The Taste of Simplicity</p>
      <div className="flex space-x-4 relative">
        <Link to="/order" className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-200">
          Order Food
        </Link>
        <Link to="/reviews" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-200">
          Check Reviews
        </Link>
        <Link to="/cafe" className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-200">
          Our Café
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;