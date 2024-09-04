import express from "express";
import Register from "../contollers/register.controller.js";
import { registerSchema } from "../validationschema/registerSchema.js";

const apiRoute = express.Router();

apiRoute.post('/register', registerSchema, Register);

export default apiRoute;