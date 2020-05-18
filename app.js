const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');


const homeRoute = require('./routes/home.js');
const writeRoute = require('./routes/write.js');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoute);
// app.use(writeRoute);

app.use('/', (req, res, next) => {
    res.redirect('/home');
})

app.use((req, res, next) => {
    res.status(404).send("<h1> Page not Found</h1>")
});

mongoose.connect('mongodb+srv://mimidata:RGLxO6q89NYtRwWx@cluster0-vpuy4.mongodb.net/article')
.then(result => {
    app.listen(3000);
})
.catch(err => {
    conosole.log(err);
})
