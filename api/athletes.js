const express = require('express')
const router = express.Router()
const Athlete = require('../models/athlete')


router.get('/', (req, res) => {
    res.send('hola  atletas')
});


router.post('/', async (req, res, next) => {
    const athlete = new Athlete(req.body)
    try {
        const savedAthlete = await athlete.save();
        res.status(201).json(savedAthlete);
    } catch (error) {
        res.status(400)
        next(error)
    }
})


router.put('/', (req, res) => {
    res.send('modificando ...athletes')
})

router.delete('/', (req,res) => {
    res.send('delete...athletes')
})

module.exports = router;