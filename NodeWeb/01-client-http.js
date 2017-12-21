const net = require('net');

const socket = net.createConnection(80, 'www.google.com');

socket.on('connect', () => {
  socket.write('GET / HTTP/1.1\r\n');
  socket.write('Host: www.google.com\r\n');
  socket.write('\r\n');
  socket.end();
});

socket.pipe(process.stdout);
/*
HTTP/1.1 302 Found
Cache-Control: private
Content-Type: text/html; charset=UTF-8
Referrer-Policy: no-referrer
Location: http://www.google.fr/?gfe_rd=cr&dcr=0&ei=pIU6WpmyI4P_8Aey9pHADA
Content-Length: 268
Date: Wed, 20 Dec 2017 15:45:40 GMT

<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>302 Moved</TITLE></HEAD><BODY>
<H1>302 Moved</H1>
The document has moved
<A HREF="http://www.google.fr/?gfe_rd=cr&amp;dcr=0&amp;ei=pIU6WpmyI4P_8Aey9pHADA">here</A>.
</BODY></HTML>
*/