import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './myOrder.scss';
import Button from '../components/Button';
import DishItem from '../components/DishItem';
import { Link } from 'react-router-dom';


const MyOrder = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    fetchCartItems();
  }, []);


    // Fetch the cart items from the backend
    const fetchCartItems = () => {
    axios.get('http://localhost:8000/api/cart')
      .then(response => {
        setCartItems(response.data.cartItems);
        setTotalSum(response.data.totalSum); // Update totalSum
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  };

  const handleQuantityChange = (id, quantity) => {
    axios.put(`http://localhost:8000/api/cart/update/${id}`, { quantity })
      .then(response => {
        setCartItems(response.data.cartItems); // Update cart items
        setTotalSum(response.data.totalSum); // Update total sum
      })
      .catch(error => {
        console.error('Error updating item:', error);
      });
  };



  return (
    <div className='myOrder-container'>
      <div className="cart">
        <img src="Union.png" alt="cart" className='cart-btn__img' />
      </div>

      <section className="myOrder-section">
        <div>
          {cartItems.map((item) => (
            <DishItem
            key={item._id}
            id={item._id} // Pass id for handling updates
            name={item.name}
            pricePerItem={item.price}
            totalPrice={item.totalPrice}
            quantity={item.quantity}
            onQuantityChange={handleQuantityChange} // Pass the handler for updates
            />
          ))}
        </div>
        <div className="Total-container">
          <div>
            <h3>TOTALT</h3>
            <p className='font-small'>inkl 20% moms</p>
          </div>
          <h2>{totalSum} SEK</h2> {/* Display the total sum */}
        </div>
      </section>

      <div className="Btn-container">
      <Link to="/orderDone"  linkadress="/orderDone">
        <Button label="TAKE MY MONEY" variant="coal" />
     
        </Link>
      </div>
    </div>
  );
};

export default MyOrder;