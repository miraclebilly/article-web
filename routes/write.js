const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/write', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'write-article.html'));
});


module.exports = router;