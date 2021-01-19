const express = require('express')
const router = express.Router()
const Sport = require('../models/sport')


router.get('/', (req, res) => {
    res.send('obteniendo recurso...Sports')
});


router.post('/', async (req, res, next) => {
    const sport = new Sport(req.body);
    try {
        const savedSport = await sport.save();
        res.status(201).json(savedSport);
    } catch (error) {
        res.status(400);
        next(error);
    }
});


router.put('/', (req, res) => {
    res.send('modificando ...Sports')
})


router.delete('/', (req,res) => {
    res.send('DELETE...Sports')
})


module.exports = router;