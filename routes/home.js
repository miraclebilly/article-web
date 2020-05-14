const path = require('path');

const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homecontroller');


router.get('/home', homeController.getArticles);

router.post('/home', homeController.postArticle);

router.get('/home/new', homeController.getArticle);


module.exports = router;