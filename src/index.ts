import express from "express"; 
import { Application, Request, Response } from "express";
import userRoutes from "./routes/userRoutes"

const app: Application = express();

app.use(express.json())

app.use(userRoutes);

app.listen(3000, () => console.log("server hola listo"))