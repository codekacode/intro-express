import { Task } from '../entity/models/taskModel';


export const getOneTaskByIdService = (id: string) => {
    const task = Task.findById(id).populate();
    return task;
}