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
    <div className="min-h-screen bg-[#0a0a1a] text-amber-100 flex flex-col relative overflow-hidden font-[serif]">
      {/* Magical animated nebula background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 animate-nebula bg-[radial-gradient(ellipse_at_60%_40%,rgba(72,28,120,0.45)_0%,rgba(10,10,26,0.95)_70%),radial-gradient(ellipse_at_20%_80%,rgba(255,215,0,0.12)_0%,rgba(10,10,26,0.7)_60%),radial-gradient(ellipse_at_80%_70%,rgba(0,255,255,0.10)_0%,rgba(10,10,26,0.7)_60%)] transition-all duration-1000" />
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
      <div className="flex flex-1 items-center justify-center relative z-10 py-10">
        <div className="w-full max-w-2xl mx-auto px-2 md:px-8">
          <div
            className="border-4 border-[#3a2200] rounded-[2.5rem] p-2 shadow-[0_0_0_8px_#1a0d1a] animate-fadeInUp"
            style={{
              animationDelay: '0.3s',
              animationFillMode: 'both',
              background: 'rgba(24,18,27,0.55)',
              backdropFilter: 'blur(8px)'
            }}>
            <div
              className="backdrop-blur-md rounded-[2rem] px-6 md:px-12 py-10 shadow-2xl"
              style={{
                fontFamily: "'Harry P', 'Cinzel Decorative', serif",
                background: 'rgba(255,255,220,0.03)'
              }}>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-amber-400 drop-shadow-lg font-[cursive] tracking-wider" style={{ fontFamily: "'Harry P', 'Cinzel Decorative', serif" }}>
                Your Magical Order
              </h1>
              {/* Simple but attractive magical divider */}
              <div className="flex items-center justify-center mb-8">
                <span className="h-1 w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full opacity-70" />
                <span className="mx-4 text-3xl animate-pulse text-amber-400 select-none">★</span>
                <span className="h-1 w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full opacity-70" />
              </div>
              <div className="bg-[#18121b]/80 border-2 border-amber-900 p-6 rounded-2xl mb-8 shadow-inner">
                <h2 className="text-2xl text-amber-400 mb-4 font-bold">Selected Items:</h2>
                {cart.length === 0 ? (
                  <p className="italic text-amber-200/80">Your cauldron is empty.</p>
                ) : (
                  <ul className="divide-y divide-amber-900/30">
                    {cart.map((item, index) => (
                      <li key={index} className="py-3 flex justify-between text-lg">
                        <span>{item.name}</span>
                        <span className="font-bold">{item.price} Galleons</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="bg-[#18121b]/80 border-2 border-amber-900 p-6 rounded-2xl mb-8 shadow-inner">
                <label className="block mb-2 text-amber-400 text-lg font-semibold" htmlFor="tableNumber">
                  Select Table Number in the Great Hall:
                </label>
                <select
                  id="tableNumber"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="bg-[#2a1a0a] text-amber-100 border border-amber-900 p-3 rounded-lg w-full text-lg"
                >
                  <option value="">Choose a table number</option>
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((number) => (
                    <option key={number} value={number}>{number}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleConfirmOrder}
                className="mt-2 bg-gradient-to-r from-amber-700 to-yellow-500 hover:from-yellow-600 hover:to-amber-400 text-[#1a0d1a] font-bold py-4 px-10 text-xl rounded-2xl shadow-xl transition duration-300 w-full border-2 border-amber-300 disabled:opacity-50"
                disabled={!tableNumber}
              >
                Confirm Your Order
              </button>
            </div>
          </div>
        </div>
      </div>
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
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1);}
          50% { opacity: 0.5; transform: scale(1.3);}
        }
        .animate-pulse { animation: pulse 1.5s infinite; }
      `}</style>
    </div>
  );
};

export default CartReviewPage;