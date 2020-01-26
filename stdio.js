const questions = [
    'What is your name?',
    'What do you like to do?',
    'What programming language do you know?'
];

const ask = (i=0) => {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

ask();
const answers = [];
process.stdin.on('data', data => {
    answers.push(data.toString().trim());

    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    const [name, activity, lang] = answers;
    console.log(`
    Thank you ${name} for your answers!
    No go do some ${activity}. Later you can write ${lang} code.
    `);
});