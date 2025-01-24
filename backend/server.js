import express from 'express'
import dataBaseConnection from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors'
import fs from 'fs';
import path from 'path'
import Product from './models/productModel.js';
import { fileURLToPath } from 'url';
import routes from './routes/route.js'
import AuthorizationUser from './middlewares/auth.js'

dotenv.config()

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(AuthorizationUser);

const seedDatabase = async () => {
    try {
        const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'products.json'), 'utf8'));
        await Product.deleteMany();
        await Product.insertMany(data);
        console.log('Products seeded successfully');
    } catch (error) {
        console.error('Error seeding products:', error.message);
    }
};

seedDatabase();

app.use('/api', routes);

dataBaseConnection()

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});