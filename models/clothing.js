const mongoose = require('mongoose')

const clothingSchema = new mongoose.Schema({
    name: String,
    brand: String,
    isReadyToWear: Boolean
})

const Clothing = mongoose.model('Clothing', clothingSchema)

module.exports = Clothing;