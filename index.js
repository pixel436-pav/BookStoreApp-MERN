
import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import router from "./routes/bookRoutes.js";

const app = express();

app.use(express.json());


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