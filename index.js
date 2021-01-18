require('dotenv').config()

const express = require('express');
const morgan = require('morgan')
const helmet = require('helmet')

const middleware = require('./midleware')


const api = require('./api')
const db = require('./db')

const app = express();

//router
app.use(helmet());
app.use(morgan('tiny'));
app.use('/api', api);

//Middlewares
app.use(middleware.notFound);
app.use(middleware.errorHandler)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})