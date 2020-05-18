const path = require('path');
const Article = require('../models/write-article');


exports.getArticles = (req, res, next) => {
    Article.find({}).then(articles => {
        res.render('home', { articles:articles });
    }).catch(err => {
        console.log(err)
    });
    // res.render('home', {article:articles});
}


exports.postArticle = (req, res, next) => {
     //get data from form and send to home article array
     var title = req.body.title;
     var imageUrl = req.body.imageUrl;
     var article = req.body.article;
     var newArticle = {title: title, imageUrl: imageUrl, article: article}
     Article.create(newArticle).then(newArticle => {
        res.redirect('/home');
     }).catch(err => {
         console.log(err);
     }) 
              
}

exports.getArticle = (req, res, next) => {
    res.render('new.ejs');
}

exports.showArticle = (req, res, next) => {
    Article.findById(req.params.id).then(result => {
        res.render('show', {article: result}); 
    }).catch(err => {
        console.log(err);
    })
    
}

