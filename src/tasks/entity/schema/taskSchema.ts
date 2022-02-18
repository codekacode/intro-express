import { Task } from './../types/TaskInterface';
import {Schema} from 'mongoose';

export const TaskSchema = new Schema<Task>({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  status: {
    type: Boolean,
    default: false
  },
  createAt: {
    type: Date,
    default: new Date()
  },
  editedAt: {
    type: Date,
  },
  owner: { 
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: [true, 'Task owner required']
  }
});