const fs = require('fs');

if(fs.existsSync('storage')) {
    console.log('already exist')
} else {
    fs.mkdir('storage', (error) => {
        if(error) {
            throw error;
        }
        console.log('folder created');
    });
}