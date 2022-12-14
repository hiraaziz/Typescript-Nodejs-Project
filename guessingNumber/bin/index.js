#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Guess a Number!');
    await sleep();
    rainbowTitle.stop();
}
welcome();
async function guessNumber() {
    let guessnums = await inquirer.prompt([
        {
            type: "number",
            name: 'guessnumber',
            messgae: chalk.green("Guess a random number \n")
        }
    ]);
    return guessnums;
}
async function calculation(num) {
    let score = 0;
    for (let i = 0; i < 3; i++) {
        const random_number = Math.floor(Math.random() * num) + 1;
        let numberguess = await guessNumber();
        console.log("random one :", random_number);
        if (numberguess.guessnumber === random_number) {
            console.log('In  score matching');
            score = score + 1;
        }
    }
    return score;
}
async function AskAgain() {
    let Round_onescore = 0;
    let Round_twoscore = 0;
    console.log("-----------Round One----------");
    console.log("Guess a number between 1-10---->");
    Round_onescore = await calculation(10);
    console.log("\n-----------Round Two----------");
    console.log("Guess a number between 1-100---->");
    Round_twoscore = await calculation(100);
    console.log(chalk.bgMagentaBright('Round One Score: ', Round_onescore, '\n'));
    console.log(chalk.bgMagentaBright('Round Two Score: ', Round_twoscore));
}
AskAgain();
