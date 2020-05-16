const path = require('path');
const Article = require('../models/write-article');

// Article.create(
//     {
//         title: "Liquid Metal", 
//         image: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
//         article : "Aenean scelerisque fringilla mi, ac laoreet velit consectetur in. Sed quis arcu vestibulum, ultrices nulla nec, tempor mi. Curabitur luctus tortor eu sem mattis pellentesque vel ac ligula. Aenean pellentesque diam quam, a sagittis neque bibendum vel. Nam venenatis mauris justo, sit amet fringilla diam accumsan id."
//     }).then(result => {
//         console.log("ARTICLES ADDED")
//         console.log(result);
//     }).catch(err =>{
//         console.log(err);
//     })

// let articles = [
//     {title: "Liquid Metal", image: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", article : "Aenean scelerisque fringilla mi, ac laoreet velit consectetur in. Sed quis arcu vestibulum, ultrices nulla nec, tempor mi. Curabitur luctus tortor eu sem mattis pellentesque vel ac ligula. Aenean pellentesque diam quam, a sagittis neque bibendum vel. Nam venenatis mauris justo, sit amet fringilla diam accumsan id."},
//     {title: "Granite", image: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", article: "Aenean scelerisque fringilla mi, ac laoreet velit consectetur in. Sed quis arcu vestibulum, ultrices nulla nec, tempor mi. Curabitur luctus tortor eu sem mattis pellentesque vel ac ligula. Aenean pellentesque diam quam, a sagittis neque bibendum vel. Nam venenatis mauris justo, sit amet fringilla diam accumsan id."},
//     {title: "Mountain", image: "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", article: "Aenean scelerisque fringilla mi, ac laoreet velit consectetur in. Sed quis arcu vestibulum, ultrices nulla nec, tempor mi. Curabitur luctus tortor eu sem mattis pellentesque vel ac ligula. Aenean pellentesque diam quam, a sagittis neque bibendum vel. Nam venenatis mauris justo, sit amet fringilla diam accumsan id."},
//     {title: "Liquid Metal", image: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", article : "Aenean scelerisque fringilla mi, ac laoreet velit consectetur in. Sed quis arcu vestibulum, ultrices nulla nec, tempor mi. Curabitur luctus tortor eu sem mattis pellentesque vel ac ligula. Aenean pellentesque diam quam, a sagittis neque bibendum vel. Nam venenatis mauris justo, sit amet fringilla diam accumsan id."},
//     {title: "Granite", image: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", article: "Aenean scelerisque fringilla mi, ac laoreet velit consectetur in. Sed quis arcu vestibulum, ultrices nulla nec, tempor mi. Curabitur luctus tortor eu sem mattis pellentesque vel ac ligula. Aenean pellentesque diam quam, a sagittis neque bibendum vel. Nam venenatis mauris justo, sit amet fringilla diam accumsan id."},
//     {title: "Mountain", image: "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", article: "Aenean scelerisque fringilla mi, ac laoreet velit consectetur in. Sed quis arcu vestibulum, ultrices nulla nec, tempor mi. Curabitur luctus tortor eu sem mattis pellentesque vel ac ligula. Aenean pellentesque diam quam, a sagittis neque bibendum vel. Nam venenatis mauris justo, sit amet fringilla diam accumsan id."}
// ]

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