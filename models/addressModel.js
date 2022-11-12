import mongoose from "mongoose";

const { Schema } = mongoose.Schema;

export const addressSchema = new Schema({
    country: String,
    state: String,
    county: String,
    CEP: String,
    streetAddress: String,
    number: String,
    complement: String
})

module.exports = mongoose.model('Address', addressSchema)