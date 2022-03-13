import React, { useEffect, useState } from 'react';
import './App.css';
import {commerce} from './lib/commerce';
import {Products, Navbar} from './components'
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
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  useEffect(() => {
    fetchProducts([]);
  }, []);

  useEffect(() => {
    fetchCart([]);
  }, []);


  return (
    <BrowserRouter> 
      <div className='app'>
        <Navbar totalItems={cart.total_items}/> 
        <Routes>
          <Route exact path='/' element={<Products/>}>
              <Products products={products} onAddToCart={handleAddToCart}/>
          </Route>
          <Route exact path='/cart' element={<Cart/>}>
              <Cart cart={cart} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;