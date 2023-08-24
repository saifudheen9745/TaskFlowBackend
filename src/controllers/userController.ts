import { Request, Response } from "express";
import { userAuthResponse } from "../Types/user.types";
import { getUsersHelper, updateUserStatusHelper } from "../helpers/userHelper";

export const getAllUsers = async(req:Request,res:Response)=>{
    try {
        const dbResponse:userAuthResponse[] = await getUsersHelper()
        res.status(200).json(dbResponse)
    } catch (error) {
        res.status(400).json({msg:'Cannot fetch users'})
    }
}

export const updateUserStatus = async (req: Request, res: Response) => {
  try {
    const dbResponse = await updateUserStatusHelper(req.body.userId,req.body.value)
    res.status(200).json({updated:true});
  } catch (error) {
    res.status(400).json({updated:false});
  }
};