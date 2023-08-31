import { Response, Request, NextFunction } from "express"
import jwt from "../services/jwt";
export default {
    validateToken: async function(req: Request, res: Response, next: NextFunction) {
        let token: string = req.params.token ? String(req.params.token) : String(req.headers.token);
        if (!jwt.verifyToken(token)) {
            return res.status(213).json({
                message: "Token không chính xác"
            })
        }
        next();
    }
}