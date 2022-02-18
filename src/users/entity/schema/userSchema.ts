import { User } from './../types/userInterface';
import {Schema} from "mongoose";

export const UserSchema = new Schema<User>({
    name: {
        type: String,
        // required: true,
        unique: true

    },
    email: {
        type: String,
        // required: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, ' password is required'],
      },
      createdAt: {
        type: Date,
        default: new Date(),
      },
      editedAt: {
        type: Date,
      },
    });