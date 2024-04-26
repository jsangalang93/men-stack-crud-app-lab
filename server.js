const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require ('mongoose');
mongoose.connect(process.env.MONGODB_URI)

const Clothing = require('./models/clothing.js')

app.use(express.urlencoded({extended:false}))

app.get('/', async (req, res) => {
    res.render('index.ejs')
});

app.get('/clothing', async (req, res) => {
    const custClothes = await Clothing.find({})
    res.render('clothing/show.ejs')
        custClothing
})

//^add this to a show page and loop through things to print to a page.

app.post('/clothing', async (req, res)=>{
    console.log(req.body)
    if(req.body.isReadyToWear === "on"){
        req.body.isReadyToWear = true;
    } else {
        req.body.isReadyToWear = false;
    }

    const appendClothing = await Clothing.create(req.body)
})


app.get('/clothing/new', async (req, res) => {
    res.render('clothing/new.ejs');
})


mongoose.connection.on('connected', ()=>{
    console.log(`connected to MongoDB ${mongoose.connection.name}`)
})

app.listen(3014, ()=>{
    console.log(`listening on port 3014`)
})