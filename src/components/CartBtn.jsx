
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom
import './CartBtn.scss';



const CartBtn = ({ itemCount }) => {


  return (
    <div className="cart-btn-container">
    <Link to="/myOrder" className="cart-btn" >
    <img src="Union.png"  alt="cart" className='cart-btn__img'/>
    {itemCount > 0 && <div className="cart-btn__badge">{itemCount}</div>}
    </Link>
    </div>
  )
}

export default CartBtn