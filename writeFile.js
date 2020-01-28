const fs = require('fs');

const readme = `

#Introduction 

this is a readme file 

`;

fs.writeFile('./assets/readme.md', readme.trim(), (error) => {
    if(error) {
        throw error;
    }
    console.log('file created.');
});