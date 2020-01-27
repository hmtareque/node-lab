const fs = require('fs');

//const text = fs.readFileSync('./assets/text.txt', 'utf-8');

const image = fs.readFile('./assets/unix.png', (error, img) => {
    if(error) {
        console.log(`Showing error: ${error.message}`);
        process.exit();
    }
    console.log(img);
});