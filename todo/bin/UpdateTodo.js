import inquirer from 'inquirer';
import chalk from 'chalk';
export async function UpdateTodo(todoList) {
    console.clear();
    let update = await inquirer.prompt([
        {
            type: "list",
            name: "oldtodo",
            message: chalk.yellowBright("Select To Do to update : "),
            choices: todoList.map(list => list)
        },
        {
            type: "input",
            name: "newtodo",
            message: chalk.yellowBright("Write Update To do : ")
        }
    ]);
    return update;
}
