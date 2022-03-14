import React, { useEffect, useState } from 'react';
import './App.css';
import {commerce} from './lib/commerce';
import {Products, Navbar, Cart, Checkout} from './components'
import {BrowserRouter,Routes,Route } from 'react-router-dom'

const App =() =>{
  const [products, setProducts] = useState([]);
  const [cart, setCart] =useState({});
  
  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
  
    setProducts(data);
  }
  const fetchCart = async() =>{
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) =>{
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }
  const handleUpdateCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity});
    setCart(cart);
  }
  const handleRemoveFromCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId);
    setCart(cart);
  }

  const handleEmptyCart = async() => {
    const {cart} = await commerce.cart.empty()
    setCart(Cart)
  }

  useEffect(() => {
    fetchProducts([]);
    fetchCart([]);
  }, []);


  return (
      <div className='app'>
        <Navbar totalItems={cart.total_items} /> 
          {/* <Products products={products} onAddToCart={handleAddToCart}/> */}
          {/* <Cart
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleEmptyCart={handleEmptyCart}  /> */}
        <Checkout/>
      </div>
  );
}

export default App;