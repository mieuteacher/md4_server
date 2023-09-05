import express from "express";
const Router = express.Router();

import userApi from './apis/user.api'
Router.use('/users', userApi)

import authApi from './apis/auth.api'
Router.use('/auth', authApi)

import categoryApi from './apis/category.api'
Router.use('/categories', categoryApi)

import productApi from './apis/product.api'
Router.use('/products', productApi)

export default Router;