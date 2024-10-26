const express = require('express');
const bodyParser = require('body-parser');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// Add product page
app.use(adminRoutes);

// Home page
app.use(shopRoutes);

// Handle 404 Page
app.use((req, res) => {
    res.status(404).send('<h1>Page not found</h1>')
});

app.listen(3000);