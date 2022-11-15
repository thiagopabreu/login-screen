// Libs
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
//Models
import { AddressSchema } from './models/addressModel.js'
//Database Connection
import { db } from './db/db.js'
//Routes
import { userRouter } from './routes/users.js'

//Express config
const PORT = process.env.PORT;
const HOST = '0.0.0.0'
const app = express();
dotenv.config()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.json())

//Routes
app.use('/users', userRouter)

app.listen(PORT, HOST, () => {
    console.log('Listening port ' + process.env.PORT)
})
