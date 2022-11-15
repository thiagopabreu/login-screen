import mongoose from "mongoose";

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env 

export const db = mongoose.connect(
    `mongodb://${DB_USER}:${DB_PASS}@db:${DB_PORT}/${DB_NAME}?authSource=admin`,
    {
        useNewUrlParser: true
    }
).catch(error => console.log(error)).then(console.log(`Database ${DB_NAME} has been connected`))

mongoose.connection.on('error', (e) => {
    console.log('connection error: ' + e)
})


mongoose.connection.once('open', () => {
    console.log('Database Connected')
})
