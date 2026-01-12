
import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import router from "./routes/bookRoutes.js";
import cors from 'cors';

const app = express();

// MiddleWare For parsing request Bddy
app.use(express.json());

// MiddleWare for handling cors policy
// option :1 allow all origin with default of cors(*)
app.use(cors());
// option :2 allow custom origins 
// app.use(cors({
//         origin: 'http://localhost:2008',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
// }))


app.get('/', (request, response) => {
        app.listen(PORT, () => {
                console.log(`App is listening on Port ${PORT}`)
        });
});

app.use('/books',router)



mongoose
        .connect(mongoDBURL)

        .then(() => {

                app.listen(PORT, () => {
                        console.log(`App is listening on Port ${PORT}`)

                });

        }).catch((error) => {
                console.log(error);
        });