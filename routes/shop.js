const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

// List of products
const adminData = require('./admin')

router.get('/', (req, res, next) => {
    console.log(adminData.products);
    res.sendFile(path.join(rootDir, './', 'views', 'shop.html'));
});

module.exports = router;