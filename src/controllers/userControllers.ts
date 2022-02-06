import {Request, Response} from 'express';

export const getUsers = (req: Request, res: Response) => {
    res.status(200).json({data: [1,2,3,4]})
}

type User = {
    name: string,
    age: number,
}

export const createUser = (req: Request, res: Response) => {
    const user: User = req.body;
    res.status(200).json({data: user})
}