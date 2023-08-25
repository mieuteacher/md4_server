import userModel from "../models/user.model";
import { Request, Response } from "express";

export default {
    find: function(req: Request, res: Response) {
        res.json(userModel.find())
    }
}