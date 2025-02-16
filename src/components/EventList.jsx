import React from 'react';

const EventList = () => {
  const events = [
    { title: 'Live Music Night', date: '2023-11-01' },
    { title: 'Special Menu Festival', date: '2023-11-15' },
  ];

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Upcoming Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index} className="border p-2 mb-2">
            <h3 className="font-semibold">{event.title}</h3>
            <p>{event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;