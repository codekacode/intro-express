import { createUserService } from './../services/createUserService';
import { logger } from './../../logger/appLogger';
import {NextFunction, Request, Response} from 'express';
import { UserModel as User } from '../entity/models/userModel'
import { userRequest } from '../entity/types/userInterface';

export const getUsers = async(req: Request, res: Response, next: NextFunction) => {
    
    try {
        const users = await User.find({});
        res.status(200).json({users});
        // console.log(users[0]._id);
        // next(new Error('Error desde el get'));
        next();
    } catch (error: any) {
        logger.log('error', 'hello!', {message: error.message});
        res.status(400).json({})
    }
}

export const createUser = async(req: Request, res: Response, next: NextFunction) => {

    try {
        const newUser = await createUserService(req.body)
        res.status(200).json({data: newUser})
        
    } catch (error) {
        next(error);
    }
}

export const editUsers = (req: Request, res: Response) => {

    const newUser: userRequest = req.body;
    const {id} = req.params;

    // const newDb : User[]= db.map((user) => {
    //     if(user.id === parseInt(id)){
    //         return {
    //             ...user,
    //             ...newUser
    //         }
    //     } else{
    //         return user;
    //     }
    // } )
    res.status(200).json()
}

export const deleteUsers = (req: Request, res: Response) => {

    const {id} = req.params;
    // const newDb: User[] =  db.filter(user => user.id != parseInt(id));  
    res.status(200).json()  
}