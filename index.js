const express = require('express');
const app = express();

app.get('/api/athletes', (req, res) => {
    res.send('hola desde api atletas')
});


app.get('/api/sports', (req, res) => {
    res.send('hola desde api sports')
});

app.listen(8080, () => {
    console.log('app listening on port 8080')
})