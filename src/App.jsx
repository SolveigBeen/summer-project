import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Menu from './pages/menu';
import MyOrder from './pages/myOrder'

function App() {


  return (
    <BrowserRouter>
      
      <Routes>
        <Route index path="/" element ={<Menu></Menu>}/>
        <Route path="/myOrder" element ={<MyOrder></MyOrder>}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
