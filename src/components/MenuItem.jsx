import React, { useState } from 'react';
import './MenuItem.scss';


const MenuItem = ({ name, price, ingredients, onAddToCart }) => {

  const [isAdded, setIsAdded] = useState(false); // State to track if the item is added to cart

  const handleClick = () => {
    onAddToCart(name, price);
    setIsAdded(true); // Update state to indicate that the item has been added
  };

  return (
    <div className={`menuItem-container ${isAdded ? 'added' : ''}`} 
    onClick={handleClick}>
      <div className='DishItem'>
        <h3>{name}</h3>
        <div className="dottedLine"></div>
        <h3>{price} SEK</h3>
      </div>
      <p className='font-small'> {ingredients.join(', ')}</p>
    </div>
  );
};

export default MenuItem;