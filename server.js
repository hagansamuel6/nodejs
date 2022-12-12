const http = require('http');

const server = http.createServer(function(req, res){
    console.log(req, res.method)
    res.setHeader('Content-Type', 'text/html')
    res.write('hello world')

    res.end()
})


const port = 7000

server.listen(port,  function() {
    console.log(`listening on port ${port}`);
})