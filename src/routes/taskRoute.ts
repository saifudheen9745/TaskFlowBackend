import express from 'express'
import { createTask, deleteTask, getAllTask, updateTaskStatus } from '../controllers/taskController'
import { verifyToken } from '../jwt/jwt'
const Router = express.Router()

Router.get('/:userId',verifyToken,getAllTask)
Router.post('/create',verifyToken,createTask)
Router.patch("/update", verifyToken, updateTaskStatus);
Router.delete("/delete/:taskId", verifyToken,deleteTask);

export default Router