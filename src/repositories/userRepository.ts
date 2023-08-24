import { Types } from "mongoose";
import { userAuthResponse } from "../Types/user.types";
import { authModel } from "../models/authModel";

export const getAllUsers = async()=>{
    try {
        return await authModel.find()        
    } catch (error) {
        throw(error)
    }
}

export const updateUserStatus = async(userId:Types.ObjectId,value:boolean)=>{
    try {
        return authModel.updateOne({_id:userId},{$set:{isActive:value}})
    } catch (error) {
        throw(error)
    }
}