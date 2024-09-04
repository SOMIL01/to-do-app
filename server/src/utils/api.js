import express from "express";
import Register from "../contollers/register.controller.js";

const apiRoute = express.Router();

apiRoute.post('/register',Register);

export default apiRoute;