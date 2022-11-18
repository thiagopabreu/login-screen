import * as mongoose from "mongoose";
import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs'


export const userSchema = new Schema({
    name: {
        type: String,
        required: 'Enter name'
    },
    email: {
        type: String,
        required: "Enter email"
    },
    CPF: String,
    PIS: String,
    password: String
})

userSchema.pre('save', function(next) {

    const user = this
    console.log(this)
    bcrypt.genSalt(10, (error, salt) => {
        if(error) return next(error);
        console.log('entre no genSalt depois do if')
        bcrypt.hash(this.password, salt, (error, hash) => {
            if(error) return next(error)
            console.log('entrei no hash depois do if')
            this.password = hash
            next()
        })
    })
})

userSchema.methods.comparePassword = async function(password){
    console.log('KKKKKKKKKKKKKKKKKKKK')
    let result = await bcrypt.compare(password, this.password)
    return result
}

export const UserModel = mongoose.model('User', userSchema)