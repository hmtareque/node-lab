const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incTimer = () => {
    currentTime += waitInterval;
    console.log(`Waiting ${currentTime/1000} seconds`);
}

console.log(`Setting a ${waitTime/1000} for delay`);

const timerFinished = () => console.log('done');

setInterval(incTimer, waitInterval);
setTimeout(timerFinished, waitTime);