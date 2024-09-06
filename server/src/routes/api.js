import express from "express";
import Register from "../contollers/register.controller.js";
import Login from "../contollers/login.controller.js";
import { registerSchema } from "../validationschema/registerSchema.js";
import { loginSchema } from "../validationschema/loginSchema.js";
import { createTodo } from "../contollers/Todo.controller.js";
import { check } from "express-validator";

const apiRoute = express.Router();
export const apiProtected = express.Router(); 

apiRoute.post('/register', registerSchema, Register);
apiRoute.post('/login',loginSchema,Login);

//Protected APIs
apiProtected.post("/createTodo",
    [check("desc" ,"Todo desc is required ").exists()],
    createTodo);

export default apiRoute;