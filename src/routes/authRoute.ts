import express, { Request, Response } from "express";
import {
  userLogin,
  userRegister,
  newAccessToken,
} from "../controllers/authController";
const Router = express.Router();

Router.post("/register", userRegister);
Router.post("/login", userLogin);
Router.get('/token',newAccessToken)


export default Router;
