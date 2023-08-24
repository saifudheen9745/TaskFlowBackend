import { Types } from "mongoose";
import { taskModel } from "../models/taskModel";
import { task } from "../Types/task.types";

export const getAllTasks = async(userId:Types.ObjectId)=>{
    try {
        return await taskModel.find({userId:userId})
    } catch (error) {
        throw(error)
    }
}

export const createTask = async(taskObj:task)=>{
    try {
        return await taskModel.create(taskObj)
    } catch (error) {
        throw(error)
    }
}

export const updateTask = async(taskId:Types.ObjectId,status:boolean)=>{
    try {
        return await taskModel.updateOne({_id:taskId},{$set:{isComplete:status}})
    } catch (error) {
        throw(error)
    }
}

export const deleteTask = async(taskId:Types.ObjectId)=>{
    try {
        return await taskModel.deleteOne({_id:taskId})
    } catch (error) {
        throw(error)
    }
}