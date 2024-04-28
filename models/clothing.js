const mongoose = require('mongoose')

const clothingSchema = new mongoose.Schema({
    name: String,
    brand: String,
    year: String,
    iig: String,
    size: String,
    price: String,
    isReadyToWear: Boolean
})

const Clothing = mongoose.model('Clothing', clothingSchema)

module.exports = Clothing;