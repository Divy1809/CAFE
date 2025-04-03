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
    <div className="min-h-screen bg-[#0a0302] text-amber-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-amber-500 mb-2">About Horcrux Café</h1>
        <p className="text-lg mb-8 text-amber-200">Where magical dining meets authentic wizarding experience</p>
        
        {/* Cafe description */}
        <div className="bg-[#1a0d00] border border-amber-900 p-6 rounded-lg mb-8">
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
        
        {/* Features */}
        <h2 className="text-2xl font-bold text-amber-500 mb-4">Magical Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1a0d00] border border-amber-900 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-amber-500 mb-2">{feature.title}</h3>
              <p className="text-amber-200">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Events */}
        <h2 className="text-2xl font-bold text-amber-500 mb-4">Upcoming Magical Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-[#1a0d00] border border-amber-900 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-amber-500">{event.title}</h3>
              <p className="text-amber-300 mt-2">{event.date}</p>
              <p className="mt-2">{event.description}</p>
              <button className="mt-4 bg-amber-900/50 hover:bg-amber-900 text-amber-100 py-2 px-4 rounded transition duration-300">
                Reserve Your Spot
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CafePage;