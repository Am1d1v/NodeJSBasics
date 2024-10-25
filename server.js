const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log('In the 2nd middleware');
    res.send('<h1>The "Add Product" Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In the 2nd middleware');
    res.send('<h1>Home Page</h1>');
});

app.listen(3000);