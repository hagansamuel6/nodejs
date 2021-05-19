import * as http from 'http'
import * as util from 'util'
import * as os from 'os'


const listenOn = "localhost:7000";
const server = http.createServer();
server.on('request', (req, res) => {
    const requrl = new URL(req.url, listenOn);

    if(requrl.pathname = "/") homepage(req, res);
    else if(requrl.pathnamme = '/osinfo') osinfo(req, res);
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("bad url" + req.url);
    }
});


server.listen(7000);
console.log(`listening to ${listenOn}`);


function homepage(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(
    `<html><head><title>Hello, world!</title></head>
    <body><h1>Hello, world!</h1>
    <p><a href='/osinfo'>OS Info</a></p>
    </body></html>`);
}

function osinfo(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<html><head><title>Operating System Info</title></head>
    <body><h1>Operating System Info</h1>
    <table>
    <tr><th>TMP Dir</th><td>${os.tmpdir()}</td></tr>
    <tr><th>Host Name</th><td>${os.hostname()}</td></tr>
    <tr><th>OS Type</th><td>${os.type()} ${os.platform()}
    ${os.arch()} ${os.release()}</td></tr>
    <tr><th>Uptime</th><td>${os.uptime()}
    ${util.inspect(os.loadavg())}</td></tr>
    <tr><th>Memory</th><td>total: ${os.totalmem()} free:
    ${os.freemem()}</td></tr>
    <tr><th>CPU's</th><td><pre>${util.inspect(os.cpus())}</pre></td></tr>
    <tr><th>Network</th><td><pre>${util.inspect(os.networkInterfaces())}</
    pre></td></tr>
    </table>
    </body></html>`);
}