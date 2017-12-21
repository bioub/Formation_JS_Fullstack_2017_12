const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: text/plain\r\n');
  socket.write('\r\n');
  socket.write('Bonjour\r\n');
  socket.end();
});

server.listen(8080);
