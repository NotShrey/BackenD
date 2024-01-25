import mongoose from "mongoose"

new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowerCase: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowerCase: true,
    },
    password:{
        type: String,
        required: true,
    }
}, { timestamp: true })

export const User =  mongoose.model("User",useSchema)