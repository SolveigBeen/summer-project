import React, { useState } from 'react';
import axios from 'axios';

import './Meny.scss';
import MenuItem from './MenuItem';
import menuData from '../../data/menu.json';

const Meny = ({ fetchCartItemCount }) => {

  const [addedDips, setAddedDips] = useState([]); // State för att hålla reda på vilka dipsåser som har lagts till

  const handleAddToCart = (name, price) => {
    const newItem = { name, price, quantity: 1, totalPrice:price }; // Exempel: Lägg till standardkvantitet 1

    // Skicka till backend (om du har en backend-server)
    axios.post('http://localhost:8000/api/cart/add', newItem)
      .then(response => {
        console.log('Item added to cart:', response.data);
        fetchCartItemCount(); // Uppdatera varukorgen efter att en artikel lagts till
        setAddedDips([...addedDips, name]); // Lägg till dipsåsen i addedDips state
      })
      .catch(error => {
        console.error('Error adding item to cart:', error);
      });
  };

  return (
    <div className="menu-component">
      <h2 className="menu-component__header">MENY</h2>

    {menuData.wontons.map((item, index)=> (
      <MenuItem
      key={index}
      name={item.name}
      price={item.price}
      ingredients={item.ingredients}
      onAddToCart={handleAddToCart}
      ></MenuItem>
    ))}

     <br/>

      {/* Render Dips */}
  <div className="extra">
    <div className="extra-title" >
      <h3>Dipsås</h3>
      <div className="dottedLine"></div>
      <h3>19 SEK</h3>
      
    </div>
    <div className='extra-btn-container' >
      {menuData.dip.map((dip, index)=>(
      <div className={`extra-btn ${addedDips.includes(dip.name) ? 'added' : ''}`} 
        key={index}  
        onClick={() => handleAddToCart(dip.name, dip.price)} >
        <p className='font-small'>{dip.name}</p>
      </div>
      ))}
  
  </div>
  </div>
    </div>
  )
}

export default Meny