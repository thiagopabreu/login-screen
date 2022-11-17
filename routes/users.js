import express from 'express'
import { UserModel } from '../models/userModel.js'
import { AddressModel } from '../models/addressModel.js'

let router = express.Router()

//Get Method for get all users from database
router.get('/all', async (req, res) => {
    try {
        const users = await UserModel.find()
        if(users.length == 0) {
            res.status(404).json({ 
                error: "Don't have any user on database",
                code: 404
        })
        }
        else {
            res.json(users)
        }
    } catch(error) {
        res.status(500).send(error)
    }
})

//Get Method for get a specific user from database using ID
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const user = await UserModel.findById(id)
    try {
        if(user == null) {
            res.status(404).json({
                error: `A user ${id} don't founded on database`,
                code: 404
            })
        }
        else {
            res.json(user)
        }

    } catch(e) {
        res.status(500)
    }
})

//Post Method for register a user to database
//@TODO It's creating a lot of address of a User, debug it
router.post('/registration', async (req, res) => {
    const user = new UserModel({
        name: req.body.name,
        mail: req.body.mail,
        CPF: req.body.CPF,
        PIS: req.body.PIS,
        password: req.body.password
    })
    const address = new AddressModel({
        country: req.body.address.country,
        state: req.body.address.state,
        county: req.body.address.county,
        cep: req.body.address.CEP,
        streetAddress: req.body.address.streetAddress,
        number: req.body.address.number,
        complement: req.body.address.complement,
        _idUser: user.id
    })
    try {
        const exist = await UserModel.findOne({ CPF: user.CPF}).select("CPF").lean()
        if(exist) {
            const exist = await AddressModel.findOne({ _idUser: user._id}).select("_idUser").lean()
            if(exist) {
                res.status(409).json({
                    error: `CPF ${user.CPF} already has a address`
                })
            }
            res.status(409).json({
                error: `CPF ${user.CPF} already registered`,
                code: 409
            })
        }
        else {
            await user.save()
            await address.save()
            res.status(200).send('Sucess')
        }
    } catch(e) {
        res.status(500).send(e)
        console.log(e)
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const itensUpdated = req.body
    try {
        const user = await UserModel.findByIdAndUpdate(id, itensUpdated)
        user.save()
        res.status(200).send('work')
    } catch(e) {
        res.status(500)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await UserModel.findByIdAndDelete(id)
        await AddressModel.findOneAndDelete({ _idUser: id })
        res.status(200).send('User Deleted')
    } catch(e) {
        res.status(500)
    }
})

export const userRouter = router