import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Products.css";

const Products = ({productType, setProductType}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

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
    
    const handleFilterChange = useCallback((selectedType) => {
        setProductType(selectedType);
        
        if (selectedType === "Products") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(
                (product) => product.productType === selectedType
            );
            setFilteredProducts(filtered);
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },[products, setProductType]);

    useEffect(()=>{
        handleFilterChange(productType)
    },[productType, handleFilterChange])
    
    return (
        <div className="products-container">
            <h1 className="text-size">Products</h1>
                <select
                    className="select-dropdown"
                    value={productType}
                    onChange={(e)=>handleFilterChange(e.target.value)}
                    >
                    <option value="Products">Products</option>
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
