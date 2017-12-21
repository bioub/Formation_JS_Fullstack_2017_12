const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.setHeader('Content-type', 'text/plain');
  res.write('Bonjour');
  res.end();
});

server.listen(8080);
