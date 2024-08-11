import React from 'react'
import './receipt.scss'
import Header from '../components/Header'
import Button from  '../components/Button'
import {Link} from 'react-router-dom';


const Receipt = () => {

  const CartItems = [
    { id: 1, name: 'Karlstad', pricePerItem: 9 , number: 3},
    { id: 2, name: 'Stockholm', pricePerItem: 9, number: 2 },
    { id: 3, name: 'Göteborg', pricePerItem: 9, number: 1 },
  ];
  return (
    <div className="receipt-container">
     <Header></Header> 
      <section className="receipt-section">

        <div className="receipt-section-header">
        <img src="logo.png" alt="YYGS-logo"className="logo-img"></img>
        <h2>Kvitto</h2>
        <p>ordernummer</p>
        </div>
      
          {CartItems.map((item) => (
            <div className="receiptItem">
                <div key={item.id} className="receiptItem-row">
                  <h3>{item.name}</h3>
                  <div className="DottedLine"></div>
                  <h3>Total: {item.number * item.pricePerItem} SEK</h3>
                </div> 
                <div>{item.number} stycken</div>
             </div>
          ))}
      <div className="Total-container">
          <div>
            <h3>TOTALT</h3>
            <p className='font-small'>inkl 20% moms</p>
          </div>
          <h2> SEK</h2> {/* Display the total sum */}
        </div>
      </section>
      <Link to="/menu">
      <Button label="Gör en ny beställning" variant="coal" ></Button>
      </Link>
    </div>
  )
}

export default Receipt