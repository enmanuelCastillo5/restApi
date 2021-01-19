const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PW}@cluster0.wqmzv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(connectionString, options, (error) => {
    if (error) {
        console.log(`there was an error: ${error}`)
    } else {
        console.log('Database conected.')
    }
});




