const path          = require('path');
const Article       = require('../models/write-article');
const Comment       = require('../models/comment'); 


exports.getArticles = (req, res, next) => {
    //get all articles and display on the home page
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
     Article.create(newArticle)
        .then(newArticle => {
            res.redirect('/home');
        })
        .catch(err => {
         console.log(err);
     })  
                
}

exports.getArticle = (req, res, next) => {
    res.render('new.ejs');
}

exports.postComment = (req, res, next) => {
    const comment = new Comment(req.body);
    comment.save()
    .then(comment => {
        return Article.findById(req.params.id)
    })
    .then(article => {
        article.comments.unshift(comment);
        return article.save();
    })
    .then(article => {
        res.redirect('/home/'+ article._id)
    })
    
    .catch(err => {
        console.log(err)
    })
}

exports.showArticle = (req, res, next) => {
    //show details of a single article
    Article.findById(req.params.id).populate("comments").exec()
    .then(result => {

        res.render('show', {article: result}); 
    })
    .catch(err => {
        console.log(err);
    })    
}

