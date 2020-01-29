const fs = require('fs');

fs.readdirSync('./storage').forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
});

fs.rmdir('./storage', (error) => {
    if(error) {
        throw error;
    }

    console.log('removed directory');
});