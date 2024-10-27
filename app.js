const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// Add product page
app.use('/admin', adminRoutes);

// Home page
app.use(shopRoutes);

// Handle 404 Error Page
app.use((req, res) => {
    res.sendFile(path.join(__dirname, './', 'views', '404.html'));
});

app.listen(3000);