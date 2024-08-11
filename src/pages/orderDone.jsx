import React from 'react'
import './orderDone.scss'
import Header from '../components/Header'
import Button from '../components/Button'
import {Link} from 'react-router-dom';

const orderDone = () => {
  return (
    <div className="orderDone-container">
     <Header></Header> 
     <section className="section-orderDone">
      <img src='boxtop1.png' alt="food box" className='boxtop__img'></img>
      <h2>Dina wontons <br></br>är klara!</h2>
      <p>ordernummer</p>
     </section>
     <Link to="/menu"  >
        <Button label="Beställ mer" variant="coal" />
     </Link>
     <Link to="/receipt" >
        <Button label="Se kvitto" variant="boarder" />
     </Link>
    </div>
  )
}

export default orderDone