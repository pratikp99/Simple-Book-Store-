import express, { request } from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app=express();

app.use(express.json()); //middleware for parsing request body

app.use(cors());

// app.use({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:[Content-Type],
// })

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('welcome');
})

app.use('/books',booksRoute);

mongoose.connect(mongoDBURL).then(()=>{
    console.log('Conneccted to database');
    app.listen(PORT,()=>{
        console.log(`App is listening to port:${PORT}`);
    }) 
})
.catch((error)=>{
    console.log(error);
});