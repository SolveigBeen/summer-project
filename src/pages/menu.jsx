import React, { useState, useEffect }  from 'react'
import Header from '../components/Header'
import Meny from '../components/Meny'
import CartBtn from '../components/CartBtn'
import './menu.scss'
import axios from 'axios';

const Menu = () => {


  //Håller reda på antalet varor i varukorgen och vissar dessa i varukorgsknappen.
  const [itemCount, setItemCount] = useState(2);

  async function fetchCartItemCount() {
    try {
      const response = await axios.get('http://localhost:8000/api/cart');
      const items = response.data.cartItems || [];
      const count = items.reduce((sum,item)=> sum+item.quantity,0);
      setItemCount(count);
    }catch (error){
      console.error('Error fetching cart item count:', error);
    }
  }
useEffect(()=> {
  fetchCartItemCount();
}, []);


  return (
    <div className="menuPage">
      <Header></Header>
     <CartBtn itemCount={itemCount}></CartBtn>
      <Meny fetchCartItemCount={fetchCartItemCount}></Meny>
    </div>
  )
}

export default Menu
