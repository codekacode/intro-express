import express, { ErrorRequestHandler, NextFunction } from "express"; 
import { Application, Request, Response } from "express";
import userRoutes from "./users/routes/userRoutes"
import taskRoutes from "./tasks/routes/taskRoutes"
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();

const app: Application = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(userRoutes); // .use middleware
app.use(taskRoutes);


app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
    console.log(err.message);

    res.status(err.statusCode ? err.statusCode : 500).send(err.message);
})

export default app;