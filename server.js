// Libs
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
//Database Connection
import { db } from './db/db.js'
//Routes
import { userRouter } from './routes/users.js'
import { addressRouter } from './routes/address.js'

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
app.use('/address', addressRouter)

app.listen(PORT, HOST, () => {
    console.log('Listening port ' + process.env.PORT)
})
