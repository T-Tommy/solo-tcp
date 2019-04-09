const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', { flags: 'a' });

ws.write('{');
ws.write('\n\t');
ws.write('"name":"George",');
ws.write('\n\t');
ws.write('"age":4');
ws.write('\n');
ws.write('} ');
ws.end(() => {
  console.log('ok');
});
