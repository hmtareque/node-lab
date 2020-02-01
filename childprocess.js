const cp = require('child_process');

// cp.exec('open https://tutor.finder.elizaahmed.com');
// cp.exec('open -a Terminal .');

cp.exec('ls', (error, data) => {
    if(error){
        throw error;
    }
    console.log(data);
});