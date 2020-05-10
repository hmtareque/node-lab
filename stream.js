const fs = require('fs');

const writer = fs.createWriteStream('./assets/mytext.txt', 'utf-8');
for (let i = 0; i < 100; i++) {
  writer.write(`hello, #${i}!\n`);
}
writer.on('finish', () => {
  console.log('All writes are now complete.');
});
writer.end('This is the end\n');