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

    // List of created users
    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users List</title></head>');
        res.write('<body><ul><li>User1</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    // Redirecting user
    if(url === '/message' && method === 'POST'){

        const body = [];

        // 
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            console.log(message);

            // Save user's input
            fs.writeFile('message.txt', message, (err) => {
                // Redirecting user
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end();
            });

        });
 
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Response Text</title></head>');
    res.write('<body><h1>Response</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);