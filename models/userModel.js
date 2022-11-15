import * as mongoose from "mongoose";
import { Schema, model } from "mongoose";


export const userSchema = new Schema({
    name: {
        type: String,
        required: 'Enter name'
    },
    mail: {
        type: String,
        required: "Enter mail"
    },
    CPF: String,
    PIS: String,
    password: String
})

export const UserModel = mongoose.model('User', userSchema)