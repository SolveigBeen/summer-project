import React, { useState } from 'react';
import './myOrder.scss';
import Button from '../components/Button';
import DishItem from '../components/DishItem';

const MyOrder = () => {
  const initialCartItems = [
    { id: 1, name: 'Karlstad', pricePerItem: 27 },
    { id: 2, name: 'Stockholm', pricePerItem: 35 },
    { id: 3, name: 'Göteborg', pricePerItem: 30 },
  ];

  const [totalSum, setTotalSum] = useState(0);

  const handleOrderSumChange = (priceChange) => {
    // Update totalSum based on the priceChange from the DishItem
    setTotalSum((prevTotal) => prevTotal + priceChange);
  };

  return (
    <div className='myOrder-container'>
      <div className="cart">
        <img src="Union.png" alt="cart" className='cart-btn__img' />
      </div>

      <section className="myOrder-section">
        <div>
          {initialCartItems.map((item) => (
            <DishItem
              key={item.id}
              name={item.name}
              pricePerItem={item.pricePerItem}
              onOrderSumChange={handleOrderSumChange} // Correctly passing the function
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
        <Button label="TAKE MY MONEY" variant="coal" />
      </div>
    </div>
  );
};

export default MyOrder;