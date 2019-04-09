/* eslint-disable no-console */
const fs = require('fs');

const readStream = fs.createReadStream('lib/writeStream.js', { 
  encoding: 'utf8',

  // Byte size of chunk
  highWaterMark: 5 
});

// let body = '';
// readStream.on('data', chunk => {
//   body += chunk;
//   console.log(chunk);
// });

const writeStream = fs.createWriteStream('./testt');
writeStream.write('Hello World?!');

const ws = fs.createWriteStream('lib/writeStream-copy.js');
// readStream.on('data', chunk => {
//   ws.write(chunk);
// });

// readStream.on('end', () => {
//   console.log(body);
//   ws.end();
// });
readStream.pipe(ws);
