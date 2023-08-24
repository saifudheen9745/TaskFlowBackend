import { Request, Response } from "express";
import { createTaskHelper, deleteTaskHelper, getAllTaskHelper, updateTaskHelper } from "../helpers/taskHelper";

export const getAllTask = async(req:Request,res:Response)=>{
    try {
        const dbResponse:any = await getAllTaskHelper(req.params.userId)
        res.status(200).json(dbResponse)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const createTask = async (req: Request, res: Response) => {
  try {
    const dbResponse = await createTaskHelper(req.body)
    res.status(201).json({
        name:dbResponse.name,
        description:dbResponse.description,
        from:dbResponse.from,
        to:dbResponse.to,
        _id:dbResponse._id.toString(),
        isComplete:dbResponse.isComplete
    })
    
  } catch (error) {
    res.status(400).json({created:false})
  }
};


export const updateTaskStatus = async (req: Request, res: Response) => {
  try {
    const dbResponse = await updateTaskHelper(req.body.taskId,req.body.status);
    res.status(201).json({updated:true});
  } catch (error) {
    res.status(400).json({ updated: false });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const dbResponse = await deleteTaskHelper(req.params.taskId);
    res.status(201).json({ deleted: true });
  } catch (error) {
    res.status(400).json({ deleted: false });
  }
};
