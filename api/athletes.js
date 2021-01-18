const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('hola  atletas')
});

router.post('/', (req, res) => {
    res.send('creando recurso...Athletes')
})

router.put('/', (req, res) => {
    res.send('modificando ...athletes')
})

router.delete('/', (req,res) => {
    res.send('delete...athletes')
})

module.exports = router;