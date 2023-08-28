/* Load file .env */
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

/* Tạo ra đối tượng server */
const server = express();

/* Setup TypeORMS */
import {myDataSource} from './typeorms/app-data-source'

try {
    myDataSource
    .initialize()
    .then(() => {
        console.log("TypeORMS thành công!")
    })
    .catch((err) => {
        console.error("TypeORMS thất bại!")
    })
}catch(err) {
    console.log("Lỗi cú pháp!")
}

/* Setup Cors */
import cors from 'cors';
server.use(cors());

/* Setup Body Parser */
import bodyParser from 'body-parser';
server.use(bodyParser.json())

import axios from 'axios';
server.use("/authen-google", async (req, res) => {
    try {
        let result = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.FB_API_KEY}`, {
            idToken: req.body.token
        })
        console.log("result", result.data)
        res.json(result.data)
    }catch(err) {
        console.log("err", err)
    }
})

/* Version api setup */
import routeApi from './routes'
server.use('/api', routeApi)

/* Đẩy server ra port trên máy */
server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server on link: http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`)
}) 