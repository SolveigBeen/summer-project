import React from 'react'
import './orderDone.scss'
import Header from '../components/Header'
import Button from '../components/Button'
const orderDone = () => {
  return (
    <div className="myOrder-container">
     <Header></Header> 
     <section className="section-orderDone">
      <img src='boxtop1.png' alt="food box" className='boxtop__img'></img>
      <h2>Dina wontons <br></br>är klara!</h2>
      <p>ordernummer</p>
     </section>
     <Button label="Beställ mer" variant="coal" />
     <Button label="Se kvitto" variant="boarder" />
    </div>
  )
}

export default orderDone