import React from 'react';
import './Menu.scss';
import MenuItem from './MenuItem';
import menuData from '../../data/menu.json';


const Menu = () => {
  return (
    <div className="menu-component">
      <h2 className="menu-component__header">MENY</h2>

    {menuData.wontons.map((item, index)=> (
      <MenuItem
      key={index}
      name={item.name}
      price={item.price}
      ingredients={item.ingredients}
      ></MenuItem>
    ))}

      {/* Render Dips */}
  <div className="extra">
    <div className="extra-title" >
      <h3>Dipsås</h3>
      <div className="DottedLine"></div>
      <h3>9 SEK</h3>
      
    </div>
    <div className='extra-btn-container'>
      {menuData.dip.map((dip, index)=>(
      <div className='extra-btn' key={index}>
      <p className='font-small'>{dip.name}</p>
      </div>
      ))}
  
  </div>
  </div>
    </div>
  )
}

export default Menu