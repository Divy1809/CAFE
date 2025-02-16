import React from 'react';

const FoodItem = ({ name, price, addToCart }) => {
  return (
    <div className="border p-2 mb-2">
      <h2 className="font-bold">{name}</h2>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(name)} className="btn">Add to Cart</button>
    </div>
  );
};

export default FoodItem;