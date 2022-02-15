import { createDbConnection } from "./config/databaseConfig"; 
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

createDbConnection(`${process.env.MONGO_URI}`)

app.listen(process.env.PORT, () => console.log(`server hola listo en puert ${process.env.PORT}`)) 