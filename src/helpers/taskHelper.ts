import { Types } from "mongoose"
import { createTask, deleteTask, getAllTasks, updateTask } from "../repositories/taskRepository"
import { task } from "../Types/task.types"

export const getAllTaskHelper = async(userId:string)=>{
    try {
        return await getAllTasks(new Types.ObjectId(userId))
    } catch (error) {
        throw(error)
    }
}

export const createTaskHelper = async(taskObj:task)=>{
    try {
        return await createTask(taskObj)
    } catch (error) {
        throw(error)
    }
}

export const updateTaskHelper = async(taskId:string,status:boolean)=>{
    try {
        return await updateTask(new Types.ObjectId(taskId),status)
    } catch (error) {
        throw(error)
    }
}

export const deleteTaskHelper = async(taskId:string)=>{
    try {
        return await deleteTask(new Types.ObjectId(taskId))
    } catch (error) {
        throw(error)
    }
}