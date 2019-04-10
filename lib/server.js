const net = require('net');

const server = net.createServer(client => {
  console.log('Client connected!');
  client.on('data', data => {
    console.log(`From client: ${data.toString()}`);
    if(data.toString().toUpperCase() === 'I LOVE YOU') client.write(`From server: Seen at ${new Date().toLocaleTimeString()}`);
    else client.write(`From server: ${data.toString()}`);
  });
});

server.listen(4242);
