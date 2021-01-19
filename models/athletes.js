const mongoose = require('mongoose')

const athletesSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: false
    },
    birthday: {
        type: Date,
        require: false
    },
    retired: {
        type: Boolean,
        require: false
    },
    sports: [{
        type: mongoose.Types.ObjectId,
        ref: 'Sport',
        require: true,
    }]
});

const Athlete = mongoose.model('Athlete', athletesSchema);
module.exports = Athlete;