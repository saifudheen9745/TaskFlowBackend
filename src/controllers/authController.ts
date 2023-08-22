import { Request, Response } from "express";
import { loginHelper, regiterHelper } from "../helpers/authHelper";
import { userAuthResponse, userRegiterDetails } from "../Types/user.types";
import { createNewAccessToken, createToken } from "../jwt/jwt";

export const userRegister = async (req: Request, res: Response) => {
  try {
    const dbResponse: userAuthResponse = await regiterHelper(req.body);
    if (dbResponse) {
      const accessToken: string = (await createToken(
        dbResponse._id,
        process.env.JWT_ACCESS_SECRET as string,
        "30m"
      )) as string;
      const refreshToken: string = (await createToken(
        dbResponse._id,
        process.env.JWT_REFRESH_SECRET as string,
        "1d"
      )) as string;
      res.cookie("jwtRefreshToken", refreshToken);
      res.status(201).json({
        name: dbResponse?.name,
        accessToken: accessToken,
        email: dbResponse?.email,
        isActive: dbResponse?.isActive,
        userId: dbResponse?._id,
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const userLogin = async (req: Request, res: Response) => {
  try {
    const dbResponse: userAuthResponse = await loginHelper(req.body);
    if (dbResponse) {
      const accessToken: string = (await createToken(
        dbResponse._id,
        process.env.JWT_ACCESS_SECRET as string,
        "30s"
      )) as string;
      const refreshToken: string = (await createToken(
        dbResponse._id,
        process.env.JWT_REFRESH_SECRET as string,
        "1d"
      )) as string;
      res.cookie("jwtRefreshToken", refreshToken);
      res.status(201).json({
        name: dbResponse?.name,
        accessToken: accessToken,
        email: dbResponse?.email,
        isActive: dbResponse?.isActive,
        userId: dbResponse?._id,
      });
    }
  } catch (error) {
    res.status(401).json({ error });
  }
};

export const newAccessToken = async (req: Request, res: Response) => {
  try {
    const refreshToken = req.cookies.jwtRefreshToken;
    if (refreshToken) {
      const accessToken: string = await createNewAccessToken(refreshToken);
      if (accessToken) {
        res.status(200).json({accessToken:accessToken});
      }
    }
  } catch (error) {
    res.status(401).json(error);
  }
};
