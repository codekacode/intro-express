import express, { ErrorRequestHandler, NextFunction } from "express"; 
import { Application, Request, Response } from "express";
import userRoutes from "./users/routes/userRoutes"
import taskRoutes from "./tasks/routes/taskRoutes"
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

app.use(express.json())

app.use(userRoutes); // .use middleware
app.use(taskRoutes);


app.use(function(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    res.status(500).send("Algo salio mal");
})

export default app;