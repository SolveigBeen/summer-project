import React from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';

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

    </div>
  )
}

export default Header