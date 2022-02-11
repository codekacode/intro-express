import express, { ErrorRequestHandler, NextFunction } from "express"; 
import { Application, Request, Response } from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes"

const app: Application = express();

mongoose.connect("mongodb://127.0.0.1:27017/test")
    .then(() => {console.log("base de datos conectada")})
    .catch((err) => {console.log("error")})

app.use(express.json())

app.use(userRoutes);

app.use(function(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    res.status(500).send("Algo salio mal");
})

app.listen(3000, () => console.log("server hola listo")) 