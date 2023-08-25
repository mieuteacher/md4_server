/* Load file .env */
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

/* Tạo ra đối tượng server */
const server = express();

/* Version api setup */
import routeApi from './route'
server.use('/api', routeApi)

server.use('/asdbasd', (req, res) => {
    
})

/* Đẩy server ra port trên máy */
server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server on link: http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`)
}) 