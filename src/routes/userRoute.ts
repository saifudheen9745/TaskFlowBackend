import express from 'express'
import { getAllUsers, updateUserStatus } from '../controllers/userController'
import { verifyToken } from '../jwt/jwt'

const Router = express.Router()

Router.get('/',verifyToken, getAllUsers)
Router.post('/updateStatus',verifyToken,updateUserStatus)

export default Router
