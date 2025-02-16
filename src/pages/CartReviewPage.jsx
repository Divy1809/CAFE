import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CartReviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || []; // Retrieve cart items from the previous page
  const [tableNumber, setTableNumber] = useState('');

  const handleConfirmOrder = () => {
    // Logic to confirm the order can be added here
    navigate('/confirmation'); // Navigate to the Order Confirmation Page
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Cart Review</h1>
      <div className="mt-4">
        <h2 className="text-xl">Selected Items:</h2>
        {cart.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="border p-2 mb-2">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-4">
        <label className="block mb-2" htmlFor="tableNumber">Select Table Number:</label>
        <select
          id="tableNumber"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          className="border p-2"
        >
          <option value="">Choose a table number</option>
          {Array.from({ length: 30 }, (_, i) => i + 1).map((number) => (
            <option key={number} value={number}>{number}</option>
          ))}
        </select>
      </div>
      <button
        onClick={handleConfirmOrder}
        className="btn mt-4"
        disabled={!tableNumber} // Disable button if no table number is selected
      >
        Confirm Order
      </button>
    </div>
  );
};

export default CartReviewPage;