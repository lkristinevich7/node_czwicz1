const mongoose = require('mongoose')

//def schematu , wg ktorego beda zapisywane i odczytywane dane z bazy
const trainingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },

    code: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15
    },

    price: {
        type: Number,
        required: true,
        min: 2005,
    },

    days: {
        type: Number,
        required: false
    }

})

module.exports = mongoose.model('Training', trainingSchema)
