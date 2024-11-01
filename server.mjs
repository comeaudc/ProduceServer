import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/db.mjs';

// Setups
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001;

// DB Connection
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Routes

// Listen
app.listen(PORT, () => {
  console.log(`Server is now running on port: ${PORT}`);
});
