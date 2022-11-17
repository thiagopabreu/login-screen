import express from 'express'
import { AddressModel } from '../models/addressModel.js'
import { userSchema } from '../models/userModel.js'

let router = express.Router()

router.get('/all', async (req, res) => {
    try {
        const address = await AddressModel.find()
        if(address.length == 0) {
            res.status(404).json({
                error: "Don't have any address on database",
                code: 404
            })
        } else {
            res.json(address)
        }
    } catch(error) {
        res.status(500).send(error)
    }
})

//Get Method for get address from database
router.get('/:id', async(req, res) => {
    let id = req.params.id
    try {
        const address = await AddressModel.findById(id)
        if(address == null) {
            res.status(404).json({
                error: `We don't have a addres with this ${id}`
            })
        } else {
            res.status(200).json(address)
        }
    } catch(e) {
        res.status(500).json( { error: e } )
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const itensUpdated = req.body

    try {
        await AddressModel.findByIdAndUpdate(id, itensUpdated)
        res.status(200).send({ message: 'Sucess', code: 200 })
    } catch (error) {
        res.status(500)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        await AddressModel.findByIdAndDelete(id)
        res.status(200).json({ message: 'Sucess', code: 200 })
    } catch (e) {
        res.status(500)
    }
})

export const addressRouter = router