const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}).listen(process.env.PORT || 3000, '0.0.0.0');
