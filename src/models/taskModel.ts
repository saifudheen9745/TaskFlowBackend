import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    userId:{
        type:String,
        requried:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    isComplete:{
        type:Boolean,
        default:false
    }
})

interface task{
    userId:string,
    name:string,
    description:string,
    from:string,
    to:string,
    isComplete:boolean
}

export const taskModel = model<task>('taskSchema',taskSchema,'tasks')