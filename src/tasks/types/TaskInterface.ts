import {Document} from "mongoose";


export interface ITask extends Document{
    title: string;
    description: string;
    // status: boolean;
    // create_all: Date;
    // edited_at: Date;
    // created_by: string;
}

export type CreateTask = {
    title: string;
    description: string;
  }