import User from "../models/Users.js" ;
import {jsonGenerate} from "../utils/helpers.js";
import {StatusCode} from "../utils/constants.js";


export const getTodos = async (req,res) => {
    try {
        const list = await User.findById(req.userId)
        .select("-password")
        .populate("todos")
        .exec();

        return res.json(jsonGenerate(StatusCode.SUCCESS,"All todo list",list));
    }
    catch (error) {
        return res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY,"error",error));
    }
}