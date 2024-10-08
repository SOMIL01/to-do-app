import { validationResult } from "express-validator";
import { jsonGenerate } from "../utils/helpers.js";
import { StatusCode } from "../utils/constants.js";
import Todo from "../models/Todo.js";
import Users from "../models/Users.js";

export const createTodo = async (req,res) => {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.json(
            jsonGenerate(
                StatusCode.VALIDATION_ERROR,
                "Todo is required",
                error.mapped()
            )
        );
    }
    try {
        const result = await Todo.create({
            userId:req.userId,
            desc:req.body.desc,
        })

        if(result){
            const user = await Users.findOneAndUpdate({_id : req.userId},
                {
                    $push:{todos:result}
                });
            return res.json(jsonGenerate(StatusCode.SUCCESS,"Todo Created succesfully",result))
        }
    } catch (error){
        return res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY,"Something went wrong",error))
    }
};