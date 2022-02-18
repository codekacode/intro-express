import {Types} from "mongoose";

export interface User {
    id: UserIdType;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    editedAt: Date | null;
}

export type UserIdType = {
    _id: Types.ObjectId;
}

// export type userRequest = {
//     name: string,
//     age: number,
//     id: number,
// }

export type CreateUser = Omit<User, 'id' | 'createdAt' | 'editedAt' >;