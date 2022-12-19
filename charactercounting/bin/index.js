#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
async function title() {
    console.log(gradient.teen(figlet.textSync('Para Count', {
        font: 'Banner3',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 150,
        whitespaceBreak: true
    })));
}
// This will display title of Application 
await title();
await sleep();
async function Paragraph() {
    let para = await inquirer.prompt([
        {
            type: "input",
            name: "paragraph",
            message: gradient.vice("Enter Paragraph:  ")
        }
    ]);
    return para;
}
let paragraph = await Paragraph();
// Counting words
let word = paragraph.paragraph.split(' ');
console.log(chalk.greenBright('\nTotal words in Paragraph : ', word.length));
// Counting characters
let Count = 0;
word.map((wd) => Count = Count + wd.length);
console.log(chalk.yellowBright('\nTotal charcters in paragraph : ', Count));
