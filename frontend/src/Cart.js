import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./Products.css";

function Cart() {
    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        getCartProducts();
    }, []);

    const getCartProducts = async () => {
        try {
            let response = await axios.get("http://localhost:3001/api/getCartItem");
            setCartProducts(response.data);
        } catch (error) {
            console.error("Error fetching cart products:", error);
        }
    };

    const removeCartProduct = async (id) =>{
        try{
            await axios.delete(`http://localhost:3001/api/removeCartItem/${id}`)
            setCartProducts(cartProducts.filter((item) => item._id !== id));
        }
        catch(error){
            console.log("Error removing cart product", error)
        }
    }

    return (
        <div className="products-container">
            <h1>Cart Items</h1>
            {cartProducts.length === 0 ? (
                <p>Your cart is currently empty.</p>
            ) : (
                <div className="grid">
                    {cartProducts.map((item) => (
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
                            onClick={()=>removeCartProduct(item._id)}
                        >
                            Remove
                        </button>
                    </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;
