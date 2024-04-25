const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)


app.use(express.urlencoded({extended:false}))






mongoose.connection.on('connected', ()=>{
    console.log(`connected to MongoDB ${mongoose.connection.name}`)
})

app.listen(3014, ()=>{
    console.log(`listening on port 3014`)
})