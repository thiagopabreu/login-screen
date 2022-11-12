import mongoose from "mongoose";

const { Schema } = mongoose.Schema;

export const userSchema = new Schema({
    name: {
        type: String,
        required: 'Enter name'
    },
    mail: {
        type: String,
        required: "Enter mail"
    },
    address: [
        {type: Schema.Types.ObjectId, ref: 'Address'}
    ],
    CPF: String,
    PIS: String,
    password: String
})