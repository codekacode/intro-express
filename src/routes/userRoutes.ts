import { Router } from "express";
import { createUser, getUsers } from "../controllers/userControllers";

const router: Router = Router();

router.get('/users', getUsers);

router.post('/users', createUser);

export default router;