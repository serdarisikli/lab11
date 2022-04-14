//Solution 1
const fs = require('fs');
const server = require('http').createServer();
server.on('request', (req, res) => {
fs.createReadStream("./tiles.jpg").pipe(res);
});
server.listen(9000);

//Solution 2
require('http').createServer((req, res) => {
    const img = require('fs').createReadStream('./tiles.jpg');
    img.pipe(res);
    }).listen(9090, () => console.log("listening to 9090"));

//Solution 3
const http = require('http');
const fs = require('fs');
const server3 = http.createServer();
server3.on('request', function (req, res) {
res.writeHead(200, { 'Content-Type': 'image/jpeg' });
let image = fs.readFileSync('./tiles.jpg');
res.end(image, 'binary');
});
server3.listen(8080);

// Solution 4
const fs = require('fs');
const server2 = require('http').createServer();
server2.on('request', (request, response) => {
fs.readFile('./tiles.jpg', (err, data) => {
if (err) throw err;
response.end(data);
});
});
server2.listen(8000);