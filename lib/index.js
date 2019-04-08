const fs = require('fs');

const readStream = fs.createReadStream('1_streams.md');
readStream.on('data', chunk => {
  console.log(chunk.toString());
});

const writeStream = fs.createWriteStream('./testt');
writeStream.write('Hello World?!');
