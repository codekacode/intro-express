import { UserIdType } from '../../../users/entity/types/userInterface';
import {Types} from "mongoose";

export interface Task {
    id: TaskId;
    title: string;
    description: string;
    status: boolean;
    createAt: Date;
    editedAt: Date;
    owner: string | UserIdType;
}

export type TaskId = {
    id: Types.ObjectId;
}

export type CreateTask = Omit<Task, 'createdAt' | 'editedAt' | 'status' |'id'>