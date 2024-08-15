import React, { useEffect, useState } from 'react';
import './DishItem.scss';



function DishItem({ id, name, pricePerItem, totalPrice, quantity, onQuantityChange }) {
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  const handleButtonClick = (increment) => {
    const newCount = Math.max(0, count + increment);
    setCount(newCount);

    onQuantityChange(id, newCount); // Notify parent component to update backend and UI
  };

  return (
    <div className="DishItem-container">
      <div className="DishItem">
        <h3>{name}</h3>
        <div className="DottedLine"></div>
        <h3>{totalPrice} SEK</h3>
      </div>
      <div className="DishItem-summing">
        <button
          className="DishItem-summing-btn"
          onClick={() => handleButtonClick(1)}
        >
          <img src="plus-button.png" alt="plus" />
        </button>
        <p>{count} stycken</p>
        <button
          className="DishItem-summing-btn"
          onClick={() => handleButtonClick(-1)}
        >
          <img src="minus-button.png" alt="minus" />
        </button>
      </div>
    </div>
  );
}

export default DishItem;