import express from "express";
const Router = express.Router();
import userController from "../../controllers/user.controller";

Router.get('/', userController.find)

export default Router;