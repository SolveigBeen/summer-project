import React from 'react'
import Header from '../components/Header'
import Meny from '../components/Meny'
import CartBtn from '../components/CartBtn'
import './menu.scss'

const Menu = () => {
  return (
    <div className="menuPage">
      <Header></Header>
     <CartBtn></CartBtn>
      <Meny></Meny>
    </div>
  )
}

export default Menu
