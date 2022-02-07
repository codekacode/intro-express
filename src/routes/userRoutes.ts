import { Router } from "express";
import { createUser, deleteUsers, editUsers, getUsers } from "../controllers/userControllers";

const router: Router = Router();

router.get('/users', getUsers);

router.post('/users', createUser);

router.put('/users/:id', editUsers );

router.delete('/users/:id', deleteUsers);

export default router;