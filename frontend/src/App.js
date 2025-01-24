import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="hamburger" onClick={toggleSidebar}>
            ☰
          </div>
          <div className="logo">QuickCart Online</div>
        </nav>

        {isSidebarOpen && (
          <>
            <div className="bg-transparent" onClick={toggleSidebar}></div>
            <div className="sidebar">
              <button className="close-btn" onClick={toggleSidebar}>
                ✕
              </button>
              <ul>
                <li className='nav-link-li nav-link-top'>
                  <Link to="/" className="nav-link" onClick={toggleSidebar}>
                    Products
                  </Link>
                </li>
                <li className='nav-link-li'>
                  <Link to="/cart" className="nav-link" onClick={toggleSidebar}>
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
