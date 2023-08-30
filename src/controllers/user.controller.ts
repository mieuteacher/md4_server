import userModel, {NewUser} from "../models/user.model";
import { Request, Response } from "express";
import Text from '../text'
import mail, {templates} from "../services/mail";
export default {
    register: async function(req: Request, res: Response) {
       try {
            let newUser: NewUser = {
                ...req.body,
                createAt: new Date(Date.now()),
                updateAt: new Date(Date.now()),
            }
            let modelRes = await userModel.register(newUser);

            modelRes.message = (Text(String(req.headers.language)) as any)[modelRes.message];

            /* Mail */
            if(modelRes.status) {
                mail.sendMail({
                    to: `${modelRes.data?.email}`,
                    subject: "Xác thực email",
                    html: templates.emailConfirm({
                        confirmLink: "chuaco",
                        language: String(req.headers.language),
                        productName: "Miêu Store",
                        productWebUrl: "abc.com",
                        receiverName: modelRes.data?.firstName + '' + modelRes.data?.lastName
                    })
                })
            }

            return res.status(modelRes.status ? 200 : 213).json(modelRes);
       }catch(err) {
            return res.status(500).json({
                messsage: Text(String(req.headers.language)).controllerErr
            })
       }
    }
}