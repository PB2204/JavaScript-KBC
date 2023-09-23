#!/usr/bin/env node


/*
    /$$$$$  /$$$$$$          /$$   /$$ /$$$$$$$   /$$$$$$
   |__  $$ /$$__  $$        | $$  /$$/| $$__  $$ /$$__  $$
      | $$| $$  \__/        | $$ /$$/ | $$  \ $$| $$  \__/
      | $$|  $$$$$$  /$$$$$$| $$$$$/  | $$$$$$$ | $$
 /$$  | $$ \____  $$|______/| $$  $$  | $$__  $$| $$
| $$  | $$ /$$  \ $$        | $$\  $$ | $$  \ $$| $$    $$
|  $$$$$$/|  $$$$$$/        | $$ \  $$| $$$$$$$/|  $$$$$$/
 \______/  \______/         |__/  \__/|_______/  \______/
*/


import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'Who Wants To Win The JavaScript KBC ? \n'
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')}
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...

  `);
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if (isCorrect) {
        spinner.success({ text: `Nice Work ${playerName}. That's A legit Answer` });
    } else {
        spinner.error({ text: `💀💀💀 Game Over, Unfortunately You Lost The Prize Money . We're Sorry For You , ${playerName}!` });
        process.exit(1);
    }
}

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What Is Your Name?',
        default() {
            return 'Player';
        },
    });

    playerName = answers.player_name;
}

function winner() {
    console.clear();
    figlet(`Congrats , ${playerName} !\n Rs. 1 0 , 0 0 0 , 0 0 0`, (err, data) => {
        console.log(gradient.pastel.multiline(data) + '\n');

        console.log(
            chalk.green(
                `Programming Is Not Solely About Your Knowledge; It's About Adding A Touch Of Flair To The Command Line !`
            )
        );
        process.exit(0);
    });
}

// Question 1
async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Who is often referred to as the "father of JavaScript"?\n',
        choices: [
            'Brendan Eich',
            'Mark Zuckerberg',
            'Tim Berners-Lee',
            'Bill Gates',
        ],
    });

    return handleAnswer(answers.question_1 === 'Brendan Eich');
}

// Question 2
async function question2() {
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'What is the primary purpose of JavaScript in web development?\n',
        choices: [
            'Styling web pages',
            'Creating databases',
            'Enhancing user interfaces',
            'Sending emails',
        ],
    });

    return handleAnswer(answers.question_2 === 'Enhancing user interfaces');
}

// Question 3
async function question3() {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'Which keyword is used to declare a constant variable in JavaScript?\n',
        choices: ['var', 'let', 'const', 'fixed'],
    });

    return handleAnswer(answers.question_3 === 'const');
}

// Question 4
async function question4() {
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'Which of the following is not a valid JavaScript data type?\n',
        choices: [
            'Number',
            'String',
            'Character',
            'Boolean',
        ],
    });

    return handleAnswer(answers.question_4 === 'Character');
}

// Question 5
async function question5() {
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message: 'What does the "DOM" stand for in web development?\n',
        choices: [
            'Document Object Model',
            'Data Output Mechanism',
            'Digital Object Manager',
            'Document Orientation Module',
        ],
    });

    return handleAnswer(answers.question_5 === 'Document Object Model');
}

// Question 6
async function question6() {
    const answers = await inquirer.prompt({
        name: 'question_6',
        type: 'list',
        message: 'Which keyword is used to declare a variable in JavaScript?\n',
        choices: ['var', 'let', 'const', 'variable'],
    });

    return handleAnswer(answers.question_6 === 'var');
}

// Question 7
async function question7() {
    const answers = await inquirer.prompt({
        name: 'question_7',
        type: 'list',
        message: 'What does the acronym "DOM" stand for in web development?\n',
        choices: [
            'Document Object Model',
            'Data Object Model',
            'Design Object Model',
            'Document Object Method',
        ],
    });

    return handleAnswer(answers.question_7 === 'Document Object Model');
}

// Question 8
async function question8() {
    const answers = await inquirer.prompt({
        name: 'question_8',
        type: 'list',
        message: 'Which built-in method removes the last element from an array and returns that element in JavaScript?\n',
        choices: ['pop()', 'shift()', 'splice()', 'push()'],
    });

    return handleAnswer(answers.question_8 === 'pop()');
}

// Question 9
async function question9() {
    const answers = await inquirer.prompt({
        name: 'question_9',
        type: 'list',
        message: 'What is the purpose of the `addEventListener` method in JavaScript?\n',
        choices: [
            'To add a class to an element',
            'To execute a function when an event occurs',
            'To create a new DOM element',
            'To change the CSS style of an element',
        ],
    });

    return handleAnswer(answers.question_9 === 'To execute a function when an event occurs');
}

// Question 10
async function question10() {
    const answers = await inquirer.prompt({
        name: 'question_10',
        type: 'list',
        message: 'Which operator is used for strict equality in JavaScript?\n',
        choices: ['==', '===', '=', '!='],
    });

    return handleAnswer(answers.question_10 === '===');
}

// Question 11
async function question11() {
    const answers = await inquirer.prompt({
        name: 'question_11',
        type: 'list',
        message: 'What is the purpose of the JavaScript `map()` function?\n',
        choices: [
            'To filter elements in an array',
            'To transform elements in an array',
            'To remove elements from an array',
            'To find the maximum value in an array',
        ],
    });

    return handleAnswer(answers.question_11 === 'To transform elements in an array');
}

// Question 12
async function question12() {
    const answers = await inquirer.prompt({
        name: 'question_12',
        type: 'list',
        message: 'In JavaScript, what is the result of adding a number and a string?\n',
        choices: [
            'An error',
            'The number is converted to a string and concatenated',
            'The string is converted to a number and added',
            'A random value is generated',
        ],
    });

    return handleAnswer(answers.question_12 === 'The number is converted to a string and concatenated');
}

// Question 13
async function question13() {
    const answers = await inquirer.prompt({
        name: 'question_13',
        type: 'list',
        message: 'Which method is used to remove the last element from an array and return it?\n',
        choices: ['pop()', 'shift()', 'splice()', 'push()'],
    });

    return handleAnswer(answers.question_13 === 'pop()');
}

// Question 14
async function question14() {
    const answers = await inquirer.prompt({
        name: 'question_14',
        type: 'list',
        message: 'In JavaScript, what does the `NaN` value represent?\n',
        choices: [
            'Not a Number',
            'Zero',
            'Infinity',
            'Undefined',
        ],
    });

    return handleAnswer(answers.question_14 === 'Not a Number');
}

// Question 15
async function question15() {
    const answers = await inquirer.prompt({
        name: 'question_15',
        type: 'list',
        message: 'What is the purpose of the JavaScript `forEach()` method?\n',
        choices: [
            'To execute a function for each element in an array',
            'To create a new array with filtered elements',
            'To find the first element that matches a condition',
            'To sort the elements in an array',
        ],
    });

    return handleAnswer(answers.question_15 === 'To execute a function for each element in an array');
}


// Run it with top-level await
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
await question9();
await question10();
await question11();
await question12();
await question13();
await question14();
await question15();
winner();