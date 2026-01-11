
import express from "express";
import { PORT , mongoDBURL } from "./config.js";
import mongoose from "mongoose";


const app = express();

app.get('/',(request,response) => {

      app.listen(PORT, () => {
        console.log(`App is listening on Port ${PORT}`)
});


});




mongoose
.connect(mongoDBURL)

.then(() => {

        app.listen(PORT, () => {
        console.log(`App is listening on Port ${PORT}`)

});
  
}) .catch((error) => {
        console.log(error);
});