const express = require('express');
const morgan = require('morgan')
const helmet = require('helmet')

const middleware = require('./midleware')
const api = require('./api')

const app = express();

//router
app.use(helmet());
app.use(morgan('tiny'));
app.use('/api', api);

//Middlewares
app.use(middleware.notFound);
app.use(middleware.errorHandler)

app.listen(8080, () => {
    console.log('app listening on port 8080')
})
