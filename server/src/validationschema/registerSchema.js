import { check } from "express-validator";

export const registerSchema =[
    check('name').trim()
    .isAlpha()
    .withMessage("Name should be Alphabets only"),

    check('username','Username is required').exists()
    .isAlphanumeric()
    .isLength({min:6, max:32})
    .trim()
    .withMessage("Username should contain Alphanumeric charachters only"),

    check('password','Password is required').exists()
    .isLength({min:8, max:32}).trim(),

    check('email','Email should exist').exists()
    .isEmail(),
]