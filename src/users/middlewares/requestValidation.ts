import {Request, Response, NextFunction} from 'express';
import { ApplicationError } from '../../customErrors/applicationError';


export const userValidation = (req:Request, res:Response, next:NextFunction) => {
    if(!req.body.email) {
        // res.send(400).json({});
        next(new ApplicationError(400,'Error validacion user email'))
    }
    if(!req.body.name) {
        // res.send(400).json({});
        next(new ApplicationError(400, 'validacion user name'))
    }
    next();
}