import Product from '../models/productModel.js';
import Cart from '../models/cartModel.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
};

export const addProductToCart = async (req, res)=>{
    try{
        const newCartItem = new Cart(req.body);
        const savedCart = await newCartItem.save();
        res.status(201).json(savedCart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getAllCartProducts = async (req, res) => {
    try {
        const cartProducts = await Cart.find();
        res.status(200).json(cartProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching cart products', error: error.message });
    }
};

export const removeCartProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Cart.findByIdAndDelete(id);
        res.status(200).json({ message: 'Removed cart item successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};