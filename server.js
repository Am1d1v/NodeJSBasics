const http = require('http');
const fs = require('fs');

const server =  http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="msg"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    // Redirecting user
    if(url === '/message' && method === 'POST'){
        // Save user's input
        fs.writeFileSync('message.txt', 'Dummy');

        // Redirecting user
        res.statusCode = 302;
        res.setHeader('location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Response Text</title></head>');
    res.write('<body><h1>Response</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);