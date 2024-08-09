import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import './menu.scss'

const menu = () => {
  return (
    <div className="menuPage">
      <Header></Header>
      <Menu></Menu>
    </div>
  )
}

export default menu
