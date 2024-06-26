const express = require('express');
const app = express();
const methodOverride = require('method-override');

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require ('mongoose');
mongoose.connect(process.env.MONGODB_URI)

const Clothing = require('./models/clothing.js')

app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

// intro page

app.get('/', async (req, res) => {
    res.render('index.ejs')
});

// find an article | clothing.ejs
app.get('/clothing', async (req, res) => {
    const custClothes = await Clothing.find({})
    res.render('clothing/index.ejs', {
        clothes: custClothes
        // ^maybe cloth?
    })
})

// adding an article
app.get('/clothing/new', async (req, res) => {
    res.render('clothing/new.ejs');
})

app.post('/clothing', async (req, res)=>{
    console.log(req.body)
    if(req.body.isReadyToWear === "on"){
        req.body.isReadyToWear = true;
    } else {
        req.body.isReadyToWear = false;
    }

    const appendClothing = await Clothing.create(req.body)
    res.redirect('/clothing')
})

// find by ID

app.get('/clothing/:clothingId', async (req, res)=>{
    const findClothes = await Clothing.findById(req.params.clothingId)
    res.render('clothing/show.ejs', {
        cloth: findClothes
    })
    console.log(findClothes);
});


app.get('/clothing/:clothingId/edit', async (req, res)=>{
    const findClothes= await Clothing.findById(req.params.clothingId)
    res.render('clothing/edit.ejs', {
        cloth: findClothes
    })
})

app.put('/clothing/:clothingId', async (req, res)=>{
    if(req.body.isReadyToWear === 'on'){
        req.body.isReadyToWear = true
    } else {
        req.body.isReadyToWear = false
    }
    await Clothing.findByIdAndUpdate(req.params.clothingId, req.body)
    res.redirect('/clothing')
})


app.delete('/clothing/:clothingId', async (req, res)=>{
    await Clothing.findByIdAndDelete(req.params.clothingId)
    res.redirect('/clothing')
})




mongoose.connection.on('connected', ()=>{
    console.log(`connected to MongoDB ${mongoose.connection.name}`)
})

app.listen(3014, ()=>{
    console.log(`listening on port 3014`)
})