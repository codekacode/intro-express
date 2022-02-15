import express, { ErrorRequestHandler, NextFunction } from "express"; 
import process from "process";
import { Application, Request, Response } from "express";
import userRoutes from "./users/routes/userRoutes"

const app: Application = express();

app.use(express.json())

app.use(userRoutes);

app.use(function(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    res.status(500).send("Algo salio mal");
})

export default app;