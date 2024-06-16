var http = require('http');

console.log('Server started... press ctrl+c to shut the server.');

http.createServer(function (req, res) {
    res.write('Hello World!');
    res.end();
}).listen(8000);