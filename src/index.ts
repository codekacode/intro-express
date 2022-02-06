import express from "express"; 
import { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json())

app.get('/users', (req: Request, res: Response) => {

    res.status(201).json({result:["1"]})
});

app.post('/users/:param', (req: Request, res: Response) => {

    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    res.status(200).send({});
})

app.listen(3000, () => console.log("server hola listo"))