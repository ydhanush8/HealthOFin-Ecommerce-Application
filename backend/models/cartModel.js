import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    productType: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
    company: { 
        type: String, 
        required: true 
    },
    model: { 
        type: String, 
        required: true 
    },
    price: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
