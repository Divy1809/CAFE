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
    <div className="min-h-screen bg-[#0a0a1a] text-amber-100 flex flex-col relative overflow-hidden font-[serif]">
      {/* Magical animated nebula background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 animate-nebula bg-[radial-gradient(ellipse_at_60%_40%,rgba(72,28,120,0.45)_0%,rgba(10,10,26,0.95)_70%),radial-gradient(ellipse_at_20%_80%,rgba(255,215,0,0.12)_0%,rgba(10,10,26,0.7)_60%),radial-gradient(ellipse_at_80%_70%,rgba(0,255,255,0.10)_0%,rgba(10,10,26,0.7)_60%)] transition-all duration-1000" />
        {/* Magical sparkles */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-amber-100 opacity-40 animate-sparkle"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        {/* Soft glows */}
        <div className="absolute w-72 h-72 left-[10%] top-[20%] bg-amber-400/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute w-96 h-96 right-[5%] bottom-[10%] bg-purple-700/20 rounded-full blur-3xl pointer-events-none"></div>
        <style>{`
          @keyframes nebula {
            0%,100% { filter: hue-rotate(0deg) brightness(1);}
            50% { filter: hue-rotate(30deg) brightness(1.1);}
          }
          .animate-nebula { animation: nebula 8s ease-in-out infinite; }
          @keyframes sparkle {
            0%,100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
          .animate-sparkle { animation: sparkle 2.5s infinite; }
        `}</style>
      </div>

      <Navbar />

      <div className="flex flex-1 relative z-10">
        {/* Sidebar for Cuisines */}
        <aside className="w-full md:w-64 p-4 bg-[#18121b]/60 border-r-2 border-[#3a2200] rounded-tr-[2.5rem] rounded-br-[2.5rem] shadow-xl backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-4 text-amber-400 border-b border-amber-900 pb-2 font-[cursive] tracking-wider">
            Magical Menu
          </h2>
          <nav className="flex flex-col space-y-2">
            {Object.keys(foodMenu).map((cuisine) => (
              <button
                key={cuisine}
                className={`p-3 rounded-xl transition duration-300 flex items-center font-semibold text-lg tracking-wide border-2 ${
                  selectedCuisine === cuisine 
                  ? 'bg-amber-900/80 text-amber-100 border-amber-400 shadow-lg'
                  : 'bg-[#22212a]/60 hover:bg-amber-900/40 text-amber-200 border-transparent'
                }`}
                onClick={() => setSelectedCuisine(cuisine)}
                style={{ fontFamily: "'Cinzel Decorative', serif" }}
              >
                <span className="mr-2 text-xl">{cuisineIcons[cuisine]}</span>
                <span>{cuisine.replace(/([A-Z])/g, ' $1').trim()}</span>
              </button>
            ))}
          </nav>
          
          <div className="mt-8 p-4 bg-[#18121b]/80 rounded-2xl border-2 border-amber-900 shadow-inner">
            <p className="font-bold text-amber-400 text-lg">Your Order</p>
            <p className="mt-2 text-amber-200">Items: {cart.length}</p>
            <button
              className="mt-4 w-full bg-gradient-to-r from-amber-700 to-yellow-500 hover:from-yellow-600 hover:to-amber-400 text-[#1a0d1a] font-bold py-2 px-4 rounded-xl shadow-lg transition duration-300 border-2 border-amber-300 disabled:opacity-50"
              onClick={handleProceed}
              disabled={cart.length === 0}
            >
              Review Order
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 flex justify-center items-start">
          <div className="w-full max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-amber-400 drop-shadow-lg font-[cursive] tracking-wider" style={{ fontFamily: "'Harry P', 'Cinzel Decorative', serif" }}>
                {selectedCuisine.replace(/([A-Z])/g, ' $1').trim()}
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full opacity-60 mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {foodMenu[selectedCuisine].map((item) => (
                <div
                  key={item.name}
                  className="bg-[#18121b]/70 border-2 border-amber-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-amber-900/40 transition duration-300 backdrop-blur-md group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(40,30,50,0.82) 60%, rgba(60,50,80,0.80) 100%), radial-gradient(circle at 50% 40%, rgba(220,180,80,0.07) 0%, rgba(24,18,27,0.80) 80%)'
                  }}
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-amber-400 font-[cursive] group-hover:text-yellow-300 transition">{item.name}</h3>
                    <p className="text-amber-200/80 mt-2 text-base italic">{item.desc}</p>
                    <div className="flex justify-between items-center mt-6">
                      <p className="text-xl font-bold text-amber-200">{item.price} Galleons</p>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-gradient-to-r from-amber-700 to-yellow-500 hover:from-yellow-600 hover:to-amber-400 text-[#1a0d1a] font-bold py-2 px-5 rounded-xl shadow-lg transition duration-300 border-2 border-amber-300"
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