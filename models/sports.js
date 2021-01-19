const mongoose = require('mongoose')

const sportsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    playersPerTeams: {
        type: Number,
        require: false
    }
});

const Sport = mongoose.model('Sport', sportsSchema);
module.exports = Sport