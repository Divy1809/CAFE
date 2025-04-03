import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const CartReviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];
  const [tableNumber, setTableNumber] = useState('');

  const handleConfirmOrder = () => {
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen bg-[#0a0302] text-amber-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-amber-500 mb-6">Your Magical Order</h1>
        <div className="bg-[#1a0d00] border border-amber-900 p-4 rounded-lg">
          <h2 className="text-xl text-amber-500 mb-4">Selected Items:</h2>
          {cart.length === 0 ? (
            <p>Your cauldron is empty.</p>
          ) : (
            <ul className="divide-y divide-amber-900/30">
              {cart.map((item, index) => (
                <li key={index} className="py-3 flex justify-between">
                  <span>{item.name}</span>
                  <span className="font-bold">{item.price} Galleons</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-6 bg-[#1a0d00] border border-amber-900 p-4 rounded-lg">
          <label className="block mb-2 text-amber-500" htmlFor="tableNumber">
            Select Table Number in the Great Hall:
          </label>
          <select
            id="tableNumber"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            className="bg-[#2a1a0a] text-amber-100 border border-amber-900 p-2 rounded-lg w-full"
          >
            <option value="">Choose a table number</option>
            {Array.from({ length: 30 }, (_, i) => i + 1).map((number) => (
              <option key={number} value={number}>{number}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleConfirmOrder}
          className="mt-6 bg-amber-700 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300"
          disabled={!tableNumber}
        >
          Confirm Your Order
        </button>
      </div>
    </div>
  );
};

export default CartReviewPage;