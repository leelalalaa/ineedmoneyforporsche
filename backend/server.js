//const express = require('express'); archaic way of doing this
import express from "express"; 
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; 
import trxRoutes from "./routes/transaction.routes.js";

dotenv.config(); 

const app = express(); 
const PORT = process.env.PORT || 5000;

app.use(express.json()); //middleware - allows us to accept JSON data in the req body 

app.use("/api/trx", trxRoutes); 

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT); 
});
