import React, { useState } from 'react';
import './DishItem.scss';


function DishItem({ name, pricePerItem, onSumChange }) {
  const [value, setValue] = useState(1);
  const [orderSum, setOrderSum] = useState(pricePerItem);



  const handleButtonClick = (increment) => {
    // Update the item count, ensuring it doesn't go below 0
    const newValue = Math.max(0, value + increment);
    setValue(newValue);

    // Calculate the new total price for this item
    const newTotalPrice = newValue * pricePerItem;
const sumChange = newTotalPrice -orderSum;

           setOrderSum(newTotalPrice);

           onSumChange(sumChange)
  };


  return (
    <div className="DishItem-container">
      <div className="DishItem">
        <h3>{name}</h3>
        <div className="DottedLine"></div>
        <h3>{orderSum} SEK</h3>
      </div>
      <div className="DishItem-summing">
        <button
          className="DishItem-summing-btn"
          onClick={() => handleButtonClick(1)}
        >
          <img src="plus-button.png" alt="plus" />
        </button>
        <p>{value} stycken</p>
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