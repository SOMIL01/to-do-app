import express from "express";
import apiRoute, { apiProtected } from "./routes/api.js";
import mongoose from "mongoose";
import { DB_CONNECT } from "./utils/constants.js";
import authMiddleware from "./middlewares/authMiddleware.js";

const app = express();
mongoose.connect(DB_CONNECT).catch(err => console.log(err)); 
const PORT = 8000;

app.use(express.json())
app.use('/api/',apiRoute)
app.use('/api/',authMiddleware,apiProtected)

app.listen(PORT,() => console.log('server is listening'));