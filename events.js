const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user} : ${message}`);
});

process.stdout.on("data", (data) => {
    const input = data.toString().trim();

    if(input === "exit") {
        emitter.emit("customEvent", "Goodbye!", "terminal");
        process.exit();
    } else {
        emitter.emit("customEvent", input, "terminal");
    }
});

