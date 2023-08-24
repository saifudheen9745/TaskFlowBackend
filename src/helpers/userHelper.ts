import { Types } from "mongoose"
import { getAllUsers, updateUserStatus } from "../repositories/userRepository"

export const getUsersHelper = async()=>{
    try {
        return await getAllUsers()
    } catch (error) {
        throw(error)
    }
}

export const updateUserStatusHelper = async(userId:string,value:boolean)=>{
    try {
        return updateUserStatus(new Types.ObjectId(userId),value)
    } catch (error) {
        throw(error)
    }
}