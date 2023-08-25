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

/* Version api setup */
import routeApi from './routes'
server.use('/api', routeApi)

/* Đẩy server ra port trên máy */
server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server on link: http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`)
}) 