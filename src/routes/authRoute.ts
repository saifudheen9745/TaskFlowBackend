import express, { Request, Response } from "express";
import {
  userLogin,
  userRegister,
  newAccessToken,
} from "../controllers/authController";
import { verifyToken } from "../jwt/jwt";
const Router = express.Router();

Router.post("/register", userRegister);
Router.post("/login", userLogin);
Router.get('/token',newAccessToken)
Router.get("/checking", verifyToken, (req: Request, res: Response) => {
  res.json({ mag: "yes" });
});

export default Router;
