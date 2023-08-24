import { userRegiterDetails } from "../Types/user.types";
import { authModel } from "../models/authModel";
import { compare } from "bcrypt";

export const registerUser = async(registerDeails:userRegiterDetails)=>{
    try {
        const isDuplicateEmail = await authModel.findOne({email:registerDeails?.email})
        if(!isDuplicateEmail){
            return await authModel.create(registerDeails)        
        }else{
            throw new Error('Email already exist')
        }
    } catch (error) {
        throw(error)
    }
}

export const loginUser = async(loginDetails:{email:string,password:string})=>{
    try {
        const isUserExist = await authModel.findOne({email:loginDetails.email})
        if(isUserExist){
            if(!isUserExist.isActive){
                throw new Error("Blocked by admin")
            }
            const isCorrectPassword:boolean = await compare(loginDetails?.password,isUserExist?.password) 
            if(isCorrectPassword){
                return isUserExist
            }else{
                throw new Error("Invalid credentials")
            }
        }else{
            throw new Error("User not registered")
        }
    } catch (error) {
        throw(error)
    }
}