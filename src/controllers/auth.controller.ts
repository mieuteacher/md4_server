import userModel, {NewUser} from "../models/user.model";
import { Request, Response } from "express";
import Text from '../text'
import mail, {templates} from "../services/mail";
import jwt from "../services/jwt";
export default {
    confirmEmail: async function(req: Request, res: Response) {
       try {
            let tokenObj = jwt.verifyToken(String(req.params.token));
            console.log("tokenObj", tokenObj)
       }catch(err) {
            return res.status(500).json({
                messsage: Text(String(req.headers.language)).controllerErr
            })
       }
    }
}