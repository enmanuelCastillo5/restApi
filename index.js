const express = require('express');
const api = require('./api')
const middleware = require('./midleware')
const app = express();

//router
app.use('/api', api)

//Middlewares
app.use(middleware.notFound);
app.use(middleware.errorHandler)

app.listen(8080, () => {
    console.log('app listening on port 8080')
})
