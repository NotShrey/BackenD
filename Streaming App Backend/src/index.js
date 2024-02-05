import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {app} from './app.js'

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})














// import mongoose from 'mongoose';
// import { DB_NAME } from "./constants"

// import { Express } from 'express';

// (async () => {
//     try {
//         // connnecting mongoose
//         await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR", error);
//             throw error
//         })
//         //port no
//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening in port ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error("ERROR", error)
//         throw err
//     }
// })()// it is wrapped in a IFFE
// //used async and try catch