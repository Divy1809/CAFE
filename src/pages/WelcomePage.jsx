import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0302] text-amber-100 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex flex-col items-center justify-center relative py-16">
        {/* Background with magical elements */}
        <div className="absolute inset-0 opacity-20 bg-center bg-cover z-0"
             style={{ backgroundImage: "url('https://api.placeholder.com/800/600')" }}></div>
        
        {/* Golden snitches floating animation could be added here */}
        
        {/* Main content */}
        <div className="z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-serif">
            <span className="text-amber-500">Horcrux</span> Café
          </h1>
          <p className="text-xl mb-2 italic">—Where Every Bite is Magical—</p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Step into the wizarding world's most enchanted dining experience. Serving authentic dishes 
            from Hogwarts Great Hall to Hogsmeade's finest establishments.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link to="/order" className="bg-amber-700 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              Order Magical Feast
            </Link>
            <Link to="/cafe" className="bg-[#2a1a0a] border border-amber-700 hover:bg-[#3a2a1a] text-amber-100 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              Explore Our Castle
            </Link>
            <Link to="/reviews" className="bg-[#2a1a0a] border border-amber-700 hover:bg-[#3a2a1a] text-amber-100 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              Wizarding Reviews
            </Link>
          </div>
          
          <div className="mt-16">
            <p className="text-amber-500 italic">
              "The finest eating establishment since The Leaky Cauldron"
            </p>
            <p className="text-sm text-gray-400">— The Daily Prophet</p>
          </div>
        </div>
      </div>
      
      <footer className="bg-[#1a0d00] text-amber-200 text-center py-4 border-t border-amber-900">
        <p>© {new Date().getFullYear()} Horcrux Café | No Muggles Were Harmed in the Making of Our Food</p>
      </footer>
    </div>
  );
};

export default WelcomePage;