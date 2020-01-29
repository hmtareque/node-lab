const fs = require('fs');



const writeStream = fs.createWriteStream('./assets/mytext.txt', 'utf-8');
const readStream = fs.createReadStream('./assets/readme.md', 'utf-8');

//process.stdout.write('hello');
//process.stdout.write(' world\n');

// writeStream.write('hello');
// writeStream.write(' world\n');

// process.stdin.on('data', data => {
//     writeStream.write(data);
// });

//process.stdin.pipe(writeStream);

readStream.pipe(writeStream);

