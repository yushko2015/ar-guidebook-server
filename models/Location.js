const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    latitude: {
        required: true,
        type: Number
    },
    longitude: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Location', locationSchema)