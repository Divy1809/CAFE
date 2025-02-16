import React from 'react';
import Gallery from '../components/Gallery';
import EventList from '../components/EventList';

const CafePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Our Café</h1>
      <Gallery />
      <EventList />
    </div>
  );
};

export default CafePage;