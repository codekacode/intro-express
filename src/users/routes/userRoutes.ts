import { Router } from "express";
import { createUser, deleteUsers, editUsers, getUsers } from "../controllers/userControllers";
import { userValidation } from "../middlewares/requestValidation";

const router: Router = Router();

router.get('/users', getUsers);

router.post('/users',userValidation, createUser);

router.put('/users/:id', editUsers );

router.delete('/users/:id', deleteUsers);

export default router;