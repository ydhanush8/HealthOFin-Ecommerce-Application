import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([])
  const [productType, setProductType] = useState("Products");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const changeProductType = (productType) => {
    setProductType(productType)
    toggleSidebar()
  }
  

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="hamburger" onClick={toggleSidebar}>
            ☰
          </div>
          <div className="logo">QuickCart Online</div>
          <div><input placeholder="Search Products" className="nav-search"/></div>
          <div className="nav-cart">
            <Link to="/cart" className="nav-cart-link">
              Cart ({cartProducts.length})
            </Link>
          </div>
        </nav>

        {isSidebarOpen && (
          <>
            <div className="bg-transparent" onClick={toggleSidebar}></div>
            <div className="sidebar">
              <button className="close-btn" onClick={toggleSidebar}>
                ✕
              </button>
              <ul>
                <li className="nav-link-li nav-link-top">
                  <Link to="/" className="nav-link" onClick={()=>changeProductType("Products")}>
                    Products
                  </Link>
                </li>
                <li className="nav-link-li">
                  <Link to="/" className="sidebar-product-type" onClick={()=>changeProductType("airConditioner")}>
                  AirConditioner
                  </Link>
                </li>
                <li className="nav-link-li">
                  <Link to="/" className="sidebar-product-type" onClick={()=>changeProductType("Computer")}>
                  Laptops
                  </Link>
                </li>
                <li className="nav-link-li">
                  <Link to="/" className="sidebar-product-type" onClick={()=>changeProductType("Refrigerator")}>
                  Refrigerator
                  </Link>
                </li>
                <li className="nav-link-li">
                  <Link to="/" className="sidebar-product-type" onClick={()=>changeProductType("Furniture")}>
                  Furniture
                  </Link>
                </li>
                <li className="nav-link-li">
                  <Link to="/" className="sidebar-product-type" onClick={()=>changeProductType("Kitchen")}>
                  Kitchen
                  </Link>
                </li>
                <li className="nav-link-li">
                  <Link to="/" className="sidebar-product-type" onClick={()=>changeProductType("Menswear")}>
                  Menswear
                  </Link>
                </li>
                <li className="nav-link-li">
                  <Link to="/" className="sidebar-product-type" onClick={()=>changeProductType("Womenswear")}>
                  Womenswear
                  </Link>
                </li>
                <li className="nav-link-li">
                  <Link to="/" className="sidebar-product-type" onClick={()=>changeProductType("Mobile")}>
                  Mobile
                  </Link>
                </li>

                <li className="nav-link-li">
                  <Link to="/cart" className="nav-link" onClick={toggleSidebar}>
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Products
                productType={productType}
                setProductType={setProductType}
              />
            }
          />
          <Route path="/cart" element={<Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
