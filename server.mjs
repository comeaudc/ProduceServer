import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/db.mjs';
import produceRoutes from './routes/produceRoutes.mjs';
import cors from 'cors';
import morgan from 'morgan'; 

// Setups
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001;

// DB Connection
connectDB();

// Middleware
app.use(cors())
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Routes
app.use('/api/produce', produceRoutes);

// Listen
app.listen(PORT, () => {
  console.log(`Server is now running on port: ${PORT}`);
});
