import inquirer from 'inquirer';
import chalk from 'chalk';
export async function deletetodosTodo(todoList) {
    console.clear();
    let deletetodos = await inquirer.prompt([
        {
            type: "list",
            name: "deletetodo",
            message: chalk.yellowBright("Select to delete ToDo : "),
            choices: todoList.map(list => list)
        }
    ]);
    return deletetodos;
}
