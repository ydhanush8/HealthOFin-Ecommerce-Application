import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <div className='logo'>Ecommerce</div>
            <li>
              <Link to="/" className='nav-link'>Products</Link>
            </li>
            <li>
              <Link to="/cart" className='nav-link'>Cart</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Products onAddToCart />} />
          <Route path="/cart" element={<Cart cartItems />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
