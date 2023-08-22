import {Schema,model} from "mongoose";

const authSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    }
})

interface authModalInterface {
    name:string,
    email:string,
    password:string,
    isActive:boolean
}

export const authModel = model<authModalInterface>('authSchema',authSchema,'users') 

