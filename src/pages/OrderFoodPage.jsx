import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FoodItem from '../components/FoodItem';
import Navbar from '../components/Navbar';

const OrderFoodPage = () => {
  const [cart, setCart] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('Hogwarts');
  const navigate = useNavigate();

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Define food items for each cuisine with Harry Potter-themed dishes
  const foodMenu = {
    Hogwarts: [
      { name: 'Treacle Tart', price: 7, desc: 'Harry Potter\'s favorite dessert' },
      { name: 'Roast Beef', price: 15, desc: 'Served at every Hogwarts feast' },
      { name: 'Yorkshire Pudding', price: 8, desc: 'Traditional English side dish' },
      { name: 'Spotted Dick', price: 6, desc: 'Classic English dessert' },
    ],
    HogsmeadeTreats: [
      { name: 'Butterbeer', price: 5, desc: 'Warming drink with butterscotch flavor' },
      { name: 'Honeydukes Chocolate', price: 8, desc: 'Finest wizard chocolate' },
      { name: 'Fire Whisky', price: 12, desc: 'For adult wizards and witches only' },
      { name: 'Pumpkin Pasties', price: 4, desc: 'Sweet pumpkin-filled pastries' },
    ],
    WeasleysDelight: [
      { name: 'Molly\'s Meat Pies', price: 10, desc: 'Hearty and filling family recipe' },
      { name: 'Christmas Pudding', price: 7, desc: 'Traditional holiday dessert' },
      { name: 'Mrs. Weasley\'s Fudge', price: 6, desc: 'Homemade chocolate fudge' },
      { name: 'Corned Beef Sandwich', price: 8, desc: 'Ron\'s least favorite' },
    ],
    MagicalBeverages: [
      { name: 'Gillywater', price: 4, desc: 'Refreshing water with hints of gillyweed' },
      { name: 'Pumpkin Juice', price: 5, desc: 'Sweet, amber-colored drink' },
      { name: 'Hot Chocolate', price: 6, desc: 'Served by Remus Lupin after Dementor encounters' },
      { name: 'Madam Rosmerta\'s Mead', price: 9, desc: 'Sweet honey wine' },
    ],
    ForbiddenTreats: [
      { name: 'Acid Pops', price: 3, desc: 'Burns a hole through your tongue' },
      { name: 'Cockroach Clusters', price: 5, desc: 'They look like peanuts!' },
      { name: 'Bertie Bott\'s Beans', price: 6, desc: 'Every flavor beans - proceed with caution' },
      { name: 'Blood Lollipops', price: 4, desc: 'Vampires\' favorite candy' },
    ],
    ThreeBrewsCauldron: [
      { name: 'Leaky Soup', price: 7, desc: 'House specialty soup' },
      { name: 'Cauldron Cakes', price: 5, desc: 'Sweet sponge cakes' },
      { name: 'Dragon Tartare', price: 18, desc: 'For the adventurous eater' },
      { name: 'Knotgrass Mead', price: 10, desc: 'Herbal honey wine' },
    ],
    ElfSpecials: [
      { name: 'Kreacher\'s Onion Soup', price: 8, desc: 'Traditional French onion soup' },
      { name: 'Dobby\'s Sock Cookies', price: 6, desc: 'Sock-shaped ginger biscuits' },
      { name: 'Kitchen Elf Stew', price: 11, desc: 'Hearty Hogwarts kitchen specialty' },
      { name: 'Free Elf Fruitcake', price: 7, desc: 'Made with S.P.E.W. approved labor' },
    ],
  };

  const handleProceed = () => {
    // Navigate to the Cart Review Page with cart items
    navigate('/cart', { state: { cart } });
  };

  // Cuisine icons/images for sidebar
  const cuisineIcons = {
    Hogwarts: "🏰",
    HogsmeadeTreats: "🍬",
    WeasleysDelight: "🏠",
    MagicalBeverages: "🍹",
    ForbiddenTreats: "⚠️",
    ThreeBrewsCauldron: "🍜",
    ElfSpecials: "🧦"
  };

  return (
    <div className="min-h-screen bg-[#0a0302] text-amber-100 flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        {/* Sidebar for Cuisines */}
        <aside className="w-full md:w-64 bg-[#1a0d00] border-r border-amber-900 p-4">
          <h2 className="text-xl font-bold mb-4 text-amber-500 border-b border-amber-900 pb-2">Magical Menu</h2>
          <nav className="flex flex-col space-y-2">
            {Object.keys(foodMenu).map((cuisine) => (
              <button
                key={cuisine}
                className={`p-3 rounded-lg transition duration-300 flex items-center ${
                  selectedCuisine === cuisine 
                  ? 'bg-amber-900 text-amber-100' 
                  : 'bg-[#2a1a0a] hover:bg-amber-900/50 text-amber-200'
                }`}
                onClick={() => setSelectedCuisine(cuisine)}
              >
                <span className="mr-2 text-lg">{cuisineIcons[cuisine]}</span>
                <span>{cuisine.replace(/([A-Z])/g, ' $1').trim()}</span>
              </button>
            ))}
          </nav>
          
          <div className="mt-8 p-3 bg-[#2a1a0a] rounded-lg border border-amber-900">
            <p className="font-bold text-amber-500">Your Order</p>
            <p className="mt-2">Items: {cart.length}</p>
            <button
              className="mt-4 w-full bg-amber-700 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              onClick={handleProceed}
              disabled={cart.length === 0}
            >
              Review Order
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-amber-500">
              {selectedCuisine.replace(/([A-Z])/g, ' $1').trim()}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodMenu[selectedCuisine].map((item) => (
                <div key={item.name} className="bg-[#1a0d00] border border-amber-900 rounded-lg overflow-hidden shadow-lg hover:shadow-amber-900/30 transition duration-300">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-amber-500">{item.name}</h3>
                    <p className="text-amber-200/70 mt-1 text-sm">{item.desc}</p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-lg font-bold">{item.price} Galleons</p>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-amber-700 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                      >
                        Add to Cauldron
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderFoodPage;