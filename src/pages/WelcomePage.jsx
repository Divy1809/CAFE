import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Simple floating snitch SVG component
const GoldenSnitch = ({ style, className }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    style={style}
  >
    <circle cx="24" cy="24" r="10" fill="#FFD700" stroke="#B8860B" strokeWidth="2" />
    <path d="M24 14 Q20 8, 10 10" stroke="#FFD700" strokeWidth="2" fill="none"/>
    <path d="M24 14 Q28 8, 38 10" stroke="#FFD700" strokeWidth="2" fill="none"/>
    <path d="M24 34 Q20 40, 10 38" stroke="#FFD700" strokeWidth="2" fill="none"/>
    <path d="M24 34 Q28 40, 38 38" stroke="#FFD700" strokeWidth="2" fill="none"/>
  </svg>
);

const houseBanners = [
  {
    name: "Gryffindor",
    color: "bg-red-700",
    border: "border-yellow-400",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Gryffindor_ClearBG.png"
  },
  {
    name: "Slytherin",
    color: "bg-green-800",
    border: "border-gray-300",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/00/Slytherin_ClearBG.png"
  },
  {
    name: "Ravenclaw",
    color: "bg-blue-900",
    border: "border-blue-300",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/48/Ravenclaw_ClearBG.png"
  },
  {
    name: "Hufflepuff",
    color: "bg-yellow-500",
    border: "border-black",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Hufflepuff_ClearBG.png"
  }
];

// Floating candle SVG
const FloatingCandle = ({ style, className }) => (
  <svg width="18" height="40" viewBox="0 0 18 40" fill="none" className={className} style={style}>
    <rect x="6" y="8" width="6" height="24" rx="3" fill="#fffbe6" stroke="#e2c275" strokeWidth="1"/>
    <ellipse cx="9" cy="8" rx="3" ry="4" fill="#fffbe6" stroke="#e2c275" strokeWidth="1"/>
    <path d="M9 4 Q10 7 9 8 Q8 7 9 4" fill="#ffd700" />
  </svg>
);

const MagicalOwl = ({ className, style }) => (
  <svg
    width="110"
    height="60"
    viewBox="0 0 110 60"
    fill="none"
    className={className}
    style={style}
  >
    {/* Owl body */}
    <ellipse cx="55" cy="40" rx="18" ry="14" fill="#f5f3e7" stroke="#bfa76f" strokeWidth="2"/>
    {/* Head */}
    <ellipse cx="55" cy="28" rx="10" ry="9" fill="#f5f3e7" stroke="#bfa76f" strokeWidth="2"/>
    {/* Eyes */}
    <circle cx="51" cy="28" r="2" fill="#222"/>
    <circle cx="59" cy="28" r="2" fill="#222"/>
    {/* Beak */}
    <polygon points="55,31 53,29 57,29" fill="#bfa76f"/>
    {/* Wings */}
    <path d="M37 40 Q20 30 35 20 Q45 30 37 40" fill="#e7e2c2" stroke="#bfa76f" strokeWidth="1"/>
    <path d="M73 40 Q90 30 75 20 Q65 30 73 40" fill="#e7e2c2" stroke="#bfa76f" strokeWidth="1"/>
    {/* Letter */}
    <rect x="50" y="47" width="10" height="7" rx="1.5" fill="#fffbe6" stroke="#bfa76f" strokeWidth="1"/>
    <polygon points="50,47 55,52 60,47" fill="#e2c275"/>
    <circle cx="55" cy="50.5" r="1" fill="#bfa76f"/>
  </svg>
);

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-amber-100 flex flex-col relative overflow-hidden font-[serif]">
      {/* Magical animated nebula background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated nebula gradient */}
        <div className="absolute inset-0 animate-nebula bg-[radial-gradient(ellipse_at_60%_40%,rgba(72,28,120,0.45)_0%,rgba(10,10,26,0.95)_70%),radial-gradient(ellipse_at_20%_80%,rgba(255,215,0,0.12)_0%,rgba(10,10,26,0.7)_60%),radial-gradient(ellipse_at_80%_70%,rgba(0,255,255,0.10)_0%,rgba(10,10,26,0.7)_60%)] transition-all duration-1000" />
        {/* Magical sparkles */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
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
        {/* Floating golden snitches */}
        <GoldenSnitch
          className="absolute animate-[float1_7s_ease-in-out_infinite]"
          style={{ top: '12%', left: '8%' }}
        />
        <GoldenSnitch
          className="absolute animate-[float2_9s_ease-in-out_infinite]"
          style={{ top: '60%', left: '80%', width: 36, height: 36, opacity: 0.8 }}
        />
        <GoldenSnitch
          className="absolute animate-[float3_11s_ease-in-out_infinite]"
          style={{ top: '30%', left: '60%', width: 28, height: 28, opacity: 0.7 }}
        />
        {/* Floating candles */}
        {[...Array(10)].map((_, i) => (
          <FloatingCandle
            key={i}
            className="absolute animate-[floatCandle_6s_ease-in-out_infinite]"
            style={{
              top: `${10 + Math.random() * 30}%`,
              left: `${10 + Math.random() * 80}%`,
              opacity: 0.7 + Math.random() * 0.3,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
        {/* Magical rune circle behind card */}
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          width="600"
          height="600"
          style={{ opacity: 0.13, filter: 'blur(1px)' }}
        >
          <circle cx="300" cy="300" r="180" stroke="#ffd700" strokeWidth="2" fill="none" />
          <circle cx="300" cy="300" r="140" stroke="#a78bfa" strokeWidth="1.5" fill="none" />
          <text x="300" y="300" textAnchor="middle" fill="#ffd700" fontSize="32" fontFamily="serif" dy="0.3em" opacity="0.7">
            ✧ Ϟ ϟ ✧
          </text>
        </svg>
        <style>{`
          @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-30px)} }
          @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
          @keyframes float3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-40px)} }
          @keyframes floatCandle { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
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

      <div className="flex-grow flex flex-col items-center justify-center relative py-10 z-10">

        <div className="relative max-w-4xl mx-auto w-full px-2 md:px-8">
          <div
            className="border-4 border-[#3a2200] rounded-[3rem] p-2 shadow-[0_0_0_12px_#1a0d1a] animate-fadeInUp"
            style={{
              animationDelay: '0.3s',
              animationFillMode: 'both',
              background: 'rgba(24,18,27,0.55)', // much more transparent
              backdropFilter: 'blur(8px)'
            }}>
            <div
              className="backdrop-blur-md rounded-[2.5rem] px-6 md:px-16 py-14 text-center shadow-2xl"
              style={{
                fontFamily: "'Harry P', 'Cinzel Decorative', serif",
                background: 'rgba(255,255,220,0.03)' // even lighter
              }}>
              <h1
                className="text-6xl md:text-8xl font-extrabold mb-6 tracking-wider drop-shadow-lg animate-glow"
                style={{ fontFamily: "'Harry P', 'Cinzel Decorative', serif" }}
              >
                <span className="text-amber-400 drop-shadow-[0_2px_8px_rgba(255,215,0,0.5)]">Horcrux</span>
                <span className="text-amber-100"> Café</span>
              </h1>
              <p className="text-3xl mb-6 italic text-amber-300 drop-shadow">
                — Welcome to the Great Hall —
              </p>
              <p className="text-xl md:text-2xl text-amber-100/80 mb-10 max-w-3xl mx-auto font-[serif]">
                Dine like a true witch or wizard! Enjoy feasts inspired by the Great Hall, Butterbeer from Hogsmeade, and magical treats from Honeydukes.<br />
                <span className="text-amber-400">"I solemnly swear that I am up to no good."</span>
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
                <Link to="/order" className="bg-gradient-to-r from-amber-700 to-yellow-500 hover:from-yellow-600 hover:to-amber-400 text-[#1a0d1a] font-bold py-4 px-10 text-xl rounded-2xl shadow-xl transition duration-300 transform hover:scale-105 border-2 border-amber-300 animate-magicalBtn">
                  Order from the Great Hall
                </Link>
                <Link to="/cafe" className="bg-[#222a1a]/80 border border-green-700 hover:bg-[#2a3a1a]/90 text-green-200 font-bold py-4 px-10 text-xl rounded-2xl shadow-xl transition duration-300 transform hover:scale-105 animate-magicalBtn">
                  Explore Hogwarts
                </Link>
                <Link to="/reviews" className="bg-[#1a1a2e]/80 border border-blue-700 hover:bg-[#23234a]/90 text-blue-200 font-bold py-4 px-10 text-xl rounded-2xl shadow-xl transition duration-300 transform hover:scale-105 animate-magicalBtn">
                  Wizarding Reviews
                </Link>
              </div>
              <div className="mt-12">
                <p className="text-amber-300 italic text-2xl">
                  "It does not do to dwell on dreams and forget to live, remember that."
                </p>
                <p className="text-base text-amber-100/60 mt-2">— Albus Dumbledore</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#18121b]/90 text-amber-200 text-center py-4 border-t-4 border-[#3a2200] z-20 shadow-inner font-[serif] animate-fadeInUp" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} Horcrux Café &nbsp;|&nbsp; Inspired by the Harry Potter film series
        </p>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeInUp {
          animation: fadeInUp 1.2s cubic-bezier(.23,1.01,.32,1) both;
        }
        @keyframes glow {
          0%,100% { text-shadow: 0 0 16px #ffd70088, 0 0 2px #fff;}
          50% { text-shadow: 0 0 32px #ffd700cc, 0 0 8px #fff;}
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }
        @keyframes floatHouse {
          0%,100% { transform: translateY(0);}
          50% { transform: translateY(-10px);}
        }
        .animate-floatHouse {
          animation: floatHouse 3.5s ease-in-out infinite;
        }
        @keyframes magicalBtn {
          0%,100% { box-shadow: 0 0 0px #ffd70044;}
          50% { box-shadow: 0 0 16px #ffd70088;}
        }
        .animate-magicalBtn:hover {
          animation: magicalBtn 1.2s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default WelcomePage;