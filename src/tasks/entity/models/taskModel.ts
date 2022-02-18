import { TaskSchema } from './../schema/taskSchema';
import { Task } from './../types/TaskInterface';
import {model} from 'mongoose';



export const TaskModel = model<Task>('Task', TaskSchema);
