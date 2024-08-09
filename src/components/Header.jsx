import React from 'react'
import './Header.scss';

function Logo() {
  return (
    <div className="Logo">
      <div>Y</div> 
      <div>Y</div>
      <div>G</div>
      <div>S</div>
    </div>
  );
}

const Header = () => {
  return (
    <div className="Header">
      <Logo></Logo>
      <div className="cart-btn">
      <img src="Union.png"  alt="cart" className='cart-btn__img'/>
      </div>
    </div>
  )
}

export default Header