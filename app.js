const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

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

console.log('server is running');
app.listen(3000);