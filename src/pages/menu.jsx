import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import CartBtn from '../components/CartBtn'
import './menu.scss'

const menu = () => {
  return (
    <div className="menuPage">
      <Header></Header>
     <CartBtn></CartBtn>
      <Menu></Menu>
    </div>
  )
}

export default menu
