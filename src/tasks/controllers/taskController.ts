import {Request, Response} from "express";
import { Task } from "../models/taskModel";
import { CreateTask } from "../routes/types/TaskInterface"; 

export const getTask = async(req: Request, res: Response) => {

    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch (error) {
        res.send(400).json({})
    }
}

export const createTask = async(req: Request<{}, {}, CreateTask>, res: Response) => {

    const {title, description} = req.body;
    console.log(title, description);

    if(!title) {
        res.status(400).send({error: "no hay title"})
    }
    
    try {
        const task = new Task({title, description, created_by: '620c36951b39c07250754959' })
        const newTask = await task.save();
        res.status(201).json({data: newTask})
    } catch (error) {
        res.status(400).json({error: "error saving task"})
    }
    
}

