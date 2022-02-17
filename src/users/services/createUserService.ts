import { userRequest } from './../routes/types.ts/User';
import { logger } from './../../logger/appLogger';
import { UserModel } from './../models/userModel';
import { ApplicationError } from "../../customErrors/applicationError";
import { IUser } from "../models/userModel";


export const createUserService = async (userRequest: userRequest): Promise<IUser> => {
    try {
        const user = new UserModel(userRequest); //no es asincrono por tal razon no necsita un await
        return await user.save();
       
    } catch (err: any) {
        logger.log('error', 'hello!', {message: err.message});
        throw new ApplicationError(400, "Error al crear usuario")
    }

}   