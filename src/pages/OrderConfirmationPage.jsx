import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const OrderConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0302] text-amber-100">
      <Navbar />
      <div className="flex items-center justify-center flex-col h-screen max-w-md mx-auto text-center px-4">
        <h1 className="text-3xl font-bold text-amber-500 mb-6">Wingardium Leviosa!</h1>
        <p className="text-xl mb-8">Your magical feast is being prepared by our house elves.</p>
        <div className="w-24 h-24 border-4 border-t-amber-500 border-amber-900/30 rounded-full animate-spin mb-8"></div>
        <p className="text-amber-300 mb-6">The owls will deliver it promptly to your table.</p>
        <Link to="/order" className="bg-amber-700 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Order More Magic
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;