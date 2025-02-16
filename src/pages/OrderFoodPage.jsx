import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import FoodItem from '../components/FoodItem';

const OrderFoodPage = () => {
  const [cart, setCart] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('Indian');
  const navigate = useNavigate(); // Initialize useNavigate

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Define food items for each cuisine
  const foodMenu = {
    Indian: [
      { name: 'Butter Chicken', price: 15 },
      { name: 'Paneer Tikka', price: 12 },
      { name: 'Biryani', price: 10 },
    ],
    Italian: [
      { name: 'Spaghetti Carbonara', price: 14 },
      { name: 'Margherita Pizza', price: 11 },
      { name: 'Lasagna', price: 13 },
    ],
    Mexican: [
      { name: 'Tacos', price: 8 },
      { name: 'Enchiladas', price: 10 },
      { name: 'Guacamole', price: 6 },
    ],
    Thai: [
      { name: 'Pad Thai', price: 12 },
      { name: 'Green Curry', price: 14 },
      { name: 'Tom Yum Soup', price: 9 },
    ],
    Japanese: [
      { name: 'Sushi', price: 16 },
      { name: 'Ramen', price: 12 },
      { name: 'Tempura', price: 10 },
    ],
    Chinese: [
      { name: 'Kung Pao Chicken', price: 12 },
      { name: 'Fried Rice', price: 10 },
      { name: 'Dumplings', price: 8 },
    ],
    Desserts: [
      { name: 'Chocolate Cake', price: 5 },
      { name: 'Ice Cream', price: 4 },
      { name: 'Tiramisu', price: 6 },
    ],
  };

  const handleProceed = () => {
    // Navigate to the Cart Review Page
    navigate('/cart', { state: { cart } }); // Pass the cart state if needed
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar for Cuisines */}
      <aside className="w-1/6.5 p-2 bg-gray-800"> {/* Adjusted width to 1/6 */}
        <h2 className="text-lg font-bold mb-2">Cuisines</h2> {/* Adjusted font size */}
        <nav className="flex flex-col space-y-1">
          {Object.keys(foodMenu).map((cuisine) => (
            <button
              key={cuisine}
              className={`p-2 rounded-lg transition duration-200 ${
                selectedCuisine === cuisine ? 'bg-gray-700' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              onClick={() => setSelectedCuisine(cuisine)}
            >
              {cuisine}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Foods</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {foodMenu[selectedCuisine].map((item) => (
            <FoodItem
              key={item.name}
              name={item.name}
              price={item.price}
              addToCart={addToCart}
            />
          ))}
        </div>
        <footer className="mt-4">
          <p>Total items: {cart.length}</p>
          <button
            className="mt-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-200"
            onClick={handleProceed}
          >
            Proceed
          </button>
        </footer>
      </main>
    </div>
  );
};

export default OrderFoodPage;