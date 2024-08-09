import React from 'react';
import './MenuItem.scss';

const MenuItem = ({name, price, ingredients}) => {
  return (
    <div className="menuItem-container">
      <div className='DishItem'>
        <h3>{name}</h3>
        <div className="DottedLine"></div>
        <h3>{price} SEK</h3>
      </div>
      <p className='font-small'> {ingredients.join(', ')}</p>
    </div>
  )
}

export default MenuItem