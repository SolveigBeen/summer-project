import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Menu from './pages/menu';
import MyOrder from './pages/myOrder'
import OrderDone from './pages/orderDone'
import Receipt from './pages/receipt'

function App() {


  return (
    <BrowserRouter>
      
      <Routes>
        <Route index path="/" element ={<Menu></Menu>}/>
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/myOrder" element ={<MyOrder></MyOrder>}/>
        <Route path="/orderDone" element ={<OrderDone></OrderDone>}/>
        <Route path="/receipt" element ={<Receipt></Receipt>}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
