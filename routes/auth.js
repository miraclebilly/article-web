const path = require('path');

const express = require('express');

const router = express.Router();

const authController = require('../controllers/authcontroller');


router.get('/signup', authController.getsignUp);

router.get('/signin', authController.getsignIn);

router.get('/forgot', authController.getforgotpassword);





module.exports = router;