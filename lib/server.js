const net = require('net');

const server = net.createServer(client => {
  client.on('data', data => {
    console.log(data.toString);
  });
});

server.listen(4242);
