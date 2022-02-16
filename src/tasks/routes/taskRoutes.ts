import { Router } from "express";
import { createTask, getTask } from "../controllers/taskController";


const router: Router = Router();

router.get('/tasks', getTask);

router.post('/tasks', createTask);

export default router