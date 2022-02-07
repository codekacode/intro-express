import {Request, Response} from 'express';
import { db } from '../db/db';
import { User } from '../types.ts/User';

export const getUsers = (req: Request, res: Response) => {
    res.status(200).json({data: db})
}

export const createUser = (req: Request, res: Response) => {
    const user: User = req.body;
    user.id = Date.now();
    db.push(user);

    res.status(200).json({data: db})
}

export const editUsers = (req: Request, res: Response) => {
    const newUser: User = req.body;
    const {id} = req.params;

    const newDb : User[]= db.map((user) => {
        if(user.id === parseInt(id)){
            return {
                ...user,
                ...newUser
            }
        } else{
            return user;
        }
    } )
    res.status(200).json({data: newDb})
}

export const deleteUsers = (req: Request, res: Response) => {
    const {id} = req.params;
    const newDb: User[] =  db.filter(user => user.id != parseInt(id));  
    res.status(200).json({data: newDb})  
}