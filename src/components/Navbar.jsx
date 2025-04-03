import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-[#1a0d00] text-amber-100 p-4 shadow-lg border-b-2 border-amber-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="text-amber-500">Horcrux</span> Café
          </Link>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className={`hover:text-amber-500 transition-colors ${location.pathname === '/' ? 'text-amber-500 font-bold' : ''}`}>
            Home
          </Link>
          <Link to="/cafe" className={`hover:text-amber-500 transition-colors ${location.pathname === '/cafe' ? 'text-amber-500 font-bold' : ''}`}>
            About Us
          </Link>
          <Link to="/reviews" className={`hover:text-amber-500 transition-colors ${location.pathname === '/reviews' ? 'text-amber-500 font-bold' : ''}`}>
            Reviews
          </Link>
          <Link to="/order" className={`hover:text-amber-500 transition-colors ${location.pathname === '/order' ? 'text-amber-500 font-bold' : ''}`}>
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;