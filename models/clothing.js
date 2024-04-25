const mongoose = require('mongoose')

const clothingSchema = new mongoose.Schema({
    name: String,
    isReadyToWear: Boolean
})

const Clothing = mongoose.model('Clothing', clothingSchema)

module.exports = Clothing;