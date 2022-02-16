import {Document} from "mongoose";
import { Types } from 'mongoose';


export interface ITask extends Document{
    title: string;
    description: string;
    status: boolean;
    create_all: Date;
    create_at: Date;
    edited_at: Date;
    created_by: Types.ObjectId;
}

export type CreateTask = {
    title: string;
    description: string;
  }