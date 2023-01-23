import React from 'react'
import './App.css'

import Home from './components/Home/Home.jsx';
import Products from './components/Products/Products.jsx';
import ProductDetails from './components/ProductsDetails/ProductDetails.jsx';
import Cart from './components/Cart/Cart.jsx';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={Home}/>
        <Route path='/products' element={Products}/>
        <Route path='/productdetails/:id' element={ProductDetails}/>
        <Route path='/cart' element={Cart}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App