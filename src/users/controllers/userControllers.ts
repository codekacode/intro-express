import {Request, Response} from 'express';

import { UserModel as User } from '../models/userModel'
import { UserType } from '../routes/types.ts/User';

export const getUsers = async(req: Request, res: Response) => {

    const users = await User.find({});
    res.status(200).json({users});
}

export const createUser = async(req: Request, res: Response) => {
    // const user: UserType = req.body;
    // user.id = Date.now();
    // db.push(user);
    if (!req.body) {
        res.status(400).json({})
    }
    try {

        const user = new User({name: req.body.name, email: req.body.email, age: req.body.age}); //no es asincrono por tal razon no necsita un await
        const savedUser = await user.save();
        res.status(200).json({data: savedUser})

    } catch (err: any) {
        res.status(400).json({error: err.message});
        
    }

}

export const editUsers = (req: Request, res: Response) => {
    const newUser: UserType = req.body;
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