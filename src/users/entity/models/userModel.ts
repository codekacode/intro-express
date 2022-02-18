import { User } from '../types/userInterface';
import { UserSchema } from './../schema/userSchema';
import {model} from 'mongoose';



export const UserModel = model<User>('User', UserSchema); 