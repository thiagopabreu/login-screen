import * as mongoose from "mongoose";

const Schema  = mongoose.Schema;

const addressSchema = new Schema({
    country: String,
    state: String,
    county: String,
    CEP: String,  
    streetAddress: String,
    number: String,
    complement: String,
    _idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

export const AddressSchema = mongoose.model('Address', addressSchema)