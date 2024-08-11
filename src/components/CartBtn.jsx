import React from 'react'
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom


const CartBtn = () => {
  return (
    <div>
    <Link to="/myOrder" className="cart-btn" linkadress="/myOrder">
    <img src="Union.png"  alt="cart" className='cart-btn__img'/>
    </Link>
    </div>
  )
}

export default CartBtn