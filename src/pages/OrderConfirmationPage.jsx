import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const OrderConfirmationPage = () => {
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
      <div className="flex items-center justify-center flex-col flex-1 min-h-[80vh] max-w-xl mx-auto text-center px-4 z-10">
        <div
          className="border-4 border-[#3a2200] rounded-[2.5rem] p-2 shadow-[0_0_0_8px_#1a0d1a] animate-fadeInUp"
          style={{
            animationDelay: '0.3s',
            animationFillMode: 'both',
            background: 'rgba(24,18,27,0.55)',
            backdropFilter: 'blur(8px)'
          }}>
          <div
            className="backdrop-blur-md rounded-[2rem] px-6 md:px-12 py-12 shadow-2xl"
            style={{
              fontFamily: "'Harry P', 'Cinzel Decorative', serif",
              background: 'rgba(255,255,220,0.03)'
            }}>
            <h1 className="text-5xl font-extrabold text-amber-400 mb-6 drop-shadow-lg font-[cursive] tracking-wider animate-glow" style={{ fontFamily: "'Harry P', 'Cinzel Decorative', serif" }}>
              Wingardium Leviosa!
            </h1>
            <p className="text-2xl mb-8 text-amber-100/90">Your magical feast is being prepared by our house elves.</p>
            {/* Magical animated loading: floating candles */}
            <div className="flex items-center justify-center mb-8 h-28 gap-4">
              {[...Array(3)].map((_, i) => (
                <svg
                  key={i}
                  width="36"
                  height="60"
                  viewBox="0 0 18 40"
                  fill="none"
                  className="animate-floatCandleLoading"
                  style={{
                    animationDelay: `${i * 0.4}s`,
                    filter: 'drop-shadow(0 0 8px #ffd70088)'
                  }}
                >
                  <rect x="6" y="8" width="6" height="24" rx="3" fill="#fffbe6" stroke="#e2c275" strokeWidth="1"/>
                  <ellipse cx="9" cy="8" rx="3" ry="4" fill="#fffbe6" stroke="#e2c275" strokeWidth="1"/>
                  <path d="M9 4 Q10 7 9 8 Q8 7 9 4" fill="#ffd700" />
                </svg>
              ))}
              <style>{`
                @keyframes floatCandleLoading {
                  0%,100% { transform: translateY(0);}
                  50% { transform: translateY(-18px);}
                }
                .animate-floatCandleLoading {
                  animation: floatCandleLoading 2.2s ease-in-out infinite;
                }
              `}</style>
            </div>
            <p className="text-amber-300 mb-8 text-lg">The owls will deliver it promptly to your table.</p>
            <Link to="/order" className="bg-gradient-to-r from-amber-700 to-yellow-500 hover:from-yellow-600 hover:to-amber-400 text-[#1a0d1a] font-bold py-3 px-8 rounded-xl shadow-xl transition duration-300 border-2 border-amber-300 text-lg">
              Order More Magic
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;