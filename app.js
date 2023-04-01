const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('hello world')
})

server.listen(1000, '127.0.0.1');
console.log('server running at 127.0.0.1:1000');