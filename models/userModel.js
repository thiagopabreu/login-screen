import * as mongoose from "mongoose";
import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'


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

userSchema.pre('save', (next) => {
    if(!this.isModified('password')) return next()

    bcrypt.genSalt(process.env.SALT_FACTOR_BCRYPT, (error, salt) => {
        if(err) return next(err);

        bcrypt.hash(user.password, salt, (error, hash) => {
            if(err) return next(error)

            this.password = hash
            next()
        })
    })
    
})

export const UserModel = mongoose.model('User', userSchema)