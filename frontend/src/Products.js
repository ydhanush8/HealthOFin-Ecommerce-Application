import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";

const Products = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [productType, setProductType] = useState("All");

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            let response = await axios.get("http://localhost:3001/api/products");
            setProducts(response.data);
            setFilteredProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    const addProductToCart = async (product) => {
        try {
            await axios.post("http://localhost:3001/api/addToCart",product);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleFilterChange = (event) => {
        const selectedType = event.target.value;
        setProductType(selectedType);

        if (selectedType === "All") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(
                (product) => product.productType === selectedType
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="products-container">
            <h1 className="text-size">Products</h1>
            <select
                className="select-dropdown"
                value={productType}
                onChange={handleFilterChange}
            >
                <option value="All">All</option>
                <option value="airConditioner">Air Conditioner</option>
                <option value="Computer">Computer</option>
                <option value="Refrigerator">Refrigerator</option>
                <option value="Furniture">Furniture</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Menswear">Menswear</option>
                <option value="Womenswear">Womenswear</option>
                <option value="Mobile">Mobile</option>
            </select>

            <div className="grid">
                {filteredProducts.map((product) => (
                    <div key={product._id} className="card">
                        <img
                            src={`http://localhost:3001${product.image}`}
                            alt={product.model}
                            className="card-image"
                        />
                        <h2>{product.model}</h2>
                        <p>{product.description}</p>
                        <p className="price">{product.price}</p>
                        <button
                            className="add-to-cart-button"
                            onClick={() => addProductToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
