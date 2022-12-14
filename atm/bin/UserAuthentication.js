import inquirer from 'inquirer';
import chalk from 'chalk';
// Getting pin from user
export async function userAuthentication() {
    let username = '';
    let pin = await inquirer
        .prompt([
        {
            type: "input",
            name: "username",
            message: chalk.yellowBright("Enter your name : ")
        },
        {
            type: "password",
            name: "password",
            message: chalk.yellowBright("Enter your 4 digit Pin : "),
            validate(answers) {
                if (answers.length !== 4) {
                    console.log(chalk.redBright(' \n Please Enter 4 Digit Pin'));
                }
                else {
                    return true;
                }
            }
        }
    ]).then((ans) => {
        username = ans.username;
    });
    return username;
}
