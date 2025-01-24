import { getAllProducts, addProductToCart, getAllCartProducts } from '../controllers/productController.js';
import express from 'express'

const router = express.Router()

router.get('/products',getAllProducts)
router.post('/addToCart',addProductToCart)
router.get('/getCartItem',getAllCartProducts)

export default router