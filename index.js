const express = require('express');
const middleware = require('./midleware')
const app = express();


app.get('/api/athletes', (req, res) => {
    res.send('hola desde api atletas')
});

app.post('/api/athletes', (req, res) => {
    res.send('creando recurso...Athletes')
})

app.get('/api/sports', (req, res) => {
    res.send('obteniendo recurso...Sports')
});

app.post('/api/sports', (req, res) => {
    res.send('creando recurso...Sports')
})

app.use(middleware.notFound);
app.use(middleware.errorHandler)

app.listen(8080, () => {
    console.log('app listening on port 8080')
})
