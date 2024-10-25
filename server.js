const http = require('http');
const express = require('express');
//const routes = require('./routes');

const app = express();

app.use((req, res, next) => {
    console.log('In the 1st middleware');
    next();
});

app.use((req, res, next) => {
    console.log('In the 2nd middleware');
});

const server =  http.createServer(app);

server.listen(3000);