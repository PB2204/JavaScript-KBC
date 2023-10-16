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
import questions from './questions/javascript.js'

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Who Wants To Win The JavaScript KBC ? \n'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlueBright('HOW TO PLAY')}
    I Am A Process On Your Terminal...
    If You Provide Any Wrong Answer , I Will Be ${chalk.bgRed('KILLED ')} 💀
    So Try To Give All Correct Answers...

  `);
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Nice Work ${playerName}. That's A legit Answer` });
  } else {
    spinner.error({
      text: `💀💀💀 Game Over, Unfortunately You Lost The Prize Money . We're Sorry For You , ${playerName}!`,
    });
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
  figlet(
    `Congrats , ${playerName} !\n Rs. 1 0 , 0 0 0 , 0 0 0`,
    (err, data) => {
      console.log(gradient.pastel.multiline(data) + '\n');

      console.log(
        chalk.green(
          `Programming Is Not Solely About Your Knowledge; It's About Adding A Touch Of Flair To The Command Line !`
        )
      );
      process.exit(0);
    }
  );
}

const ask = async () => {
  for (const question of questions) {
    const ans = await inquirer.prompt(question);
    await handleAnswer(question.name === ans[question.name]);
  }
};

// Run it with top-level await
console.clear();
await welcome();
await askName();
await ask();
winner();
