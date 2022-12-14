#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { userAuthentication } from './UserAuthentication.js';
import { Balance_Inquiry } from './BalanceCheck.js';
import { cash_withdraw } from './CashWithdraw.js';
import { Recipt } from './Receipt.js';
import { MoneyTransfer } from './Money_Transfer.js';
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`Welcome to ATM MACHINE`);
    await sleep();
    rainbowTitle.stop();
}
let username;
let trans_continue = true;
do {
    await welcome();
    // ---------Step 1----------//
    username = await userAuthentication();
    console.log(`\n Welcome ${username}`);
    // ---------Step 2----------//
    await Atm_Transaction();
    let continues = await inquirer.prompt({
        type: "confirm",
        name: "continue",
        message: chalk.yellowBright("\n Do you want to continue ? ")
    });
    trans_continue = continues.continue ? true : false;
    process.stdout.write("\u001b[2J\u001b[0;0H");
} while (trans_continue === true);
async function Atm_Transaction() {
    const balance = Math.floor(1000 + Math.random() * (10000 - 1000));
    let option = await CurrentAccOptions();
    if (option.option == 'Balance Inquiry') {
        Balance_Inquiry(balance);
    }
    else if (option.option == 'Cash Withdraw') {
        const withdraw = await cash_withdraw(balance);
        await Recipt(username, withdraw, balance);
    }
    else if (option.option == 'Money Transfer') {
        const transfer = await MoneyTransfer(balance);
        await Recipt(username, transfer, balance);
    }
}
// User Authentication Done
async function CurrentAccOptions() {
    let option = await inquirer
        .prompt([
        {
            type: "list",
            name: "option",
            message: chalk.yellowBright("Which Transaction you want to perform"),
            choices: ['Balance Inquiry', 'Cash Withdraw', 'Money Transfer']
        }
    ]);
    return option;
}
