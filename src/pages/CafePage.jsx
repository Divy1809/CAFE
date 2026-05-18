import React from 'react';
import Navbar from '../components/Navbar';

const CafePage = () => {
  const events = [
    { 
      title: 'Triwizard Tournament Feast', 
      date: '2023-11-24', 
      description: 'A celebratory feast with dishes from Hogwarts, Beauxbatons, and Durmstrang.' 
    },
    { 
      title: 'Nearly Headless Nick\'s Deathday Party', 
      date: '2023-10-31', 
      description: 'Commemorate Sir Nicholas\' 531st deathday with ghostly treats and entertainment.' 
    },
    { 
      title: 'Yule Ball Dinner', 
      date: '2023-12-25', 
      description: 'Formal Christmas dinner with dancing and traditional holiday dishes.' 
    },
  ];
  
  // Café features
  const features = [
    {
      title: "Great Hall Experience",
      description: "Dine under enchanted ceiling that reflects the sky outside with floating candles illuminating your meal."
    },
    {
      title: "House Tables",
      description: "Choose to sit at Gryffindor, Hufflepuff, Ravenclaw, or Slytherin themed areas."
    },
    {
      title: "Magical Ambiance",
      description: "Moving portraits, ghosts as occasional guests, and authentic decor from the wizarding world."
    }
  ];

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

      <main className="container mx-auto px-4 py-12 flex-1 z-10 relative">
        <div className="max-w-5xl mx-auto">
          <div className="border-4 border-[#3a2200] rounded-[2.5rem] p-2 shadow-[0_0_0_8px_#1a0d1a] bg-[#18121b]/60 backdrop-blur-md mb-12">
            <div className="backdrop-blur-md rounded-[2rem] px-8 py-10 shadow-2xl" style={{ background: 'rgba(255,255,220,0.04)' }}>
              <h1 className="text-5xl font-extrabold text-amber-400 mb-2 drop-shadow-lg font-[cursive] tracking-wider animate-glow" style={{ fontFamily: "'Harry P', 'Cinzel Decorative', serif" }}>
                About Horcrux Café
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full opacity-60 mb-6 mx-auto"></div>
              <p className="text-xl mb-8 text-amber-200 font-[serif]">Where magical dining meets authentic wizarding experience</p>
              <div className="bg-[#18121b]/80 border-2 border-amber-900 p-6 rounded-2xl mb-8 shadow-inner">
                <p className="mb-4">
                  Established in 1995 after the Battle of Hogwarts, Horcrux Café brings together the finest 
                  magical cuisines from across the wizarding world. Our recipes are sourced from Hogwarts house-elves, 
                  The Burrow's kitchen, and even a few secret recipes from Honeyduke's.
                </p>
                <p>
                  Located in Diagon Alley between Gringotts and Flourish and Blotts, our establishment welcomes 
                  witches, wizards, and even muggles with a taste for magical gastronomy.
                </p>
              </div>
              <h2 className="text-3xl font-bold text-amber-400 mb-4 mt-8">Magical Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="bg-[#18121b]/80 border-2 border-amber-900 p-6 rounded-2xl shadow-lg hover:shadow-amber-900/40 transition duration-300">
                    <h3 className="text-xl font-bold text-amber-400 mb-2">{feature.title}</h3>
                    <p className="text-amber-200">{feature.description}</p>
                  </div>
                ))}
              </div>
              <h2 className="text-3xl font-bold text-amber-400 mb-4">Upcoming Magical Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event, index) => (
                  <div key={index} className="bg-[#18121b]/80 border-2 border-amber-900 p-6 rounded-2xl shadow-lg hover:shadow-amber-900/40 transition duration-300 flex flex-col">
                    <h3 className="text-xl font-bold text-amber-400">{event.title}</h3>
                    <p className="text-amber-300 mt-2">{event.date}</p>
                    <p className="mt-2 flex-1">{event.description}</p>
                    <button className="mt-6 bg-gradient-to-r from-amber-700 to-yellow-500 hover:from-yellow-600 hover:to-amber-400 text-[#1a0d1a] font-bold py-2 px-6 rounded-xl shadow-xl transition duration-300 border-2 border-amber-300">
                      Reserve Your Spot
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CafePage;