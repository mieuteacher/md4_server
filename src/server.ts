/* Load file .env */
import dotenv from 'dotenv';
dotenv.config();

/* Express */
import express from 'express';

/* Tạo ra đối tượng server */
const server = express();

/* Setup Cors */
import cors from 'cors';
server.use(cors());

/* Setup Body Parser */
import bodyParser from 'body-parser';
server.use(bodyParser.json())

import MailServer, {templates} from './services/mail'

server.use("/test", async (req, res) => {
    let resuslt = await MailServer.sendMail({
        to: "mieuteacher@gmail.com",
        subject: "Xác thực email",
        html: templates.emailConfirm({
            productName: 'Miêu Store',
            productWebUrl: 'https://pokemoninmylife.com/',
            receiverName: 'Người Dùng Mới',
            confirmLink: 'abc.xyz',
            language: String(req.headers.language)
        })
    })
    console.log("resuslt", resuslt)
})
/* Version api setup */
import routeApi from './routes'
server.use('/api', routeApi)

/* Đẩy server ra port trên máy */
server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server on link: http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`)
}) 