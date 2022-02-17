import mongoose from 'mongoose';
import { Types } from 'mongoose';

const Schema = mongoose.Schema;

export interface IUser {
    name: string;
    email: string;
    age: number,
    created_at: Date;
}

const UserSchema = new Schema({
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
    age: {
        type: Number,
        required: [true, "Edad Requerida"]
    },
    created_at:{
        type: Date,
        default: Date.now()
    }
});

export const UserModel = mongoose.model<IUser>('User', UserSchema); 