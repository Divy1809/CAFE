import React from 'react';

const Gallery = () => {
  const photos = [
    // Add URLs of café photos here
    'p1.jpg'
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Café ${index}`} className="w-full h-auto" />
      ))}
    </div>
  );
};

export default Gallery;