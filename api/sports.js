const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('obteniendo recurso...Sports')
});

router.post('/', (req, res) => {
    res.send('creando recurso...Sports')
})

router.put('/', (req, res) => {
    res.send('modificando ...Sports')
})

router.delete('/', (req,res) => {
    res.send('DELETE...Sports')
})

module.exports = router;