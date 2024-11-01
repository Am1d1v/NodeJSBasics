const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

// Path to styles folder
app.use(express.static(path.join(__dirname, './', 'public')));

// Add product page
app.use('/admin', adminRoutes.router);

// Home page
app.use(shopRoutes);

// Handle 404 Error Page
app.use((req, res) => {
    //res.sendFile(path.join(__dirname, './', 'views', '404.html'));
    res.render('404')
});

app.listen(3000);