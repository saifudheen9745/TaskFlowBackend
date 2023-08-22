import { userRegiterDetails } from "../Types/user.types";
import { hash, compare } from "bcrypt";
import { loginUser, registerUser } from "../repositories/authRepository";

export const regiterHelper = async (registerDetails: userRegiterDetails) => {
    try {
        
        if(registerDetails){
            registerDetails.password = await hash(registerDetails?.password,10)
        }
        return await registerUser(registerDetails)
    } catch (error) {
        throw(error)   
    }
};

export const loginHelper = (loginDetails:{email:string,password:string})=>{
    try {
        return loginUser(loginDetails)
    } catch (error) {
        throw(error)
    }
}