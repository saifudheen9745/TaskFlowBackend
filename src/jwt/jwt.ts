import { NextFunction, Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";
import { Types } from "mongoose";

export const createToken = async (
  userId: Types.ObjectId,
  secretKey: string,
  expiresIn: string
) => {
  try {
    if (userId) {
      return sign({ userId }, secretKey, { expiresIn });
    }
  } catch (error) {
    throw error;
  }
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accessToken = req.headers["authorization"]?.split(" ")[1];
    if (accessToken) {
      const data: any = await verify(
        accessToken,
        process.env.JWT_ACCESS_SECRET as string
      );
    }
    next();
  } catch (error: any) {
    if (error.message === "jwt expired") {
      res.status(403).json({ msg: "access token expired" });
    } else {
      res.status(401).json({ msg: "unauthorized" });
    }
  }
};

export const createNewAccessToken = async (refreshToken: string) => {
  try {
    if (refreshToken) {
      const isValidToken: any = await verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as string
      );
      const userId: string = isValidToken.userId;
      return sign({ userId }, process.env.JWT_ACCESS_SECRET as string, {
        expiresIn: "15m",
      });
    } else {
      throw new Error("No refresh token found");
    }
  } catch (error) {
    throw error;
  }
};
