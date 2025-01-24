import React from "react";
import "./Products.css";

function Cart({ cartItems }) {
    return (
        <div className="products-container">
            <h1>Cart Items</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is currently empty.</p>
            ) : (
                <div className="grid">
                    {cartItems.map((item) => (
                        <div key={item._id} className="card">
                        <img
                            src={`http://localhost:3001${item.image}`}
                            alt={item.model}
                            className="card-image"
                        />
                        <h2>{item.model}</h2>
                        <p>{item.description}</p>
                        <p className="price">{item.price}</p>
                        <button
                            className="add-to-cart-button"
                        >
                            Buy Now
                        </button>
                    </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;
