const path = require('path');

exports.getsignUp = (req, res, next) =>  {
    res.render('signup.ejs')
}

exports.getsignIn = (req, res, next) => {
    res.render('signin')
}

exports.getforgotpassword = (req, res, next) => {
    res.render('forgot.ejs')
}