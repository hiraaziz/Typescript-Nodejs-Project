import inquirer from 'inquirer'
import gradient from 'gradient-string'
import chalk from 'chalk'

export async function deletetodosTodo(todoList:string[]) {

    console.clear()
    let deletetodos:{deletetodo:string} = await inquirer.prompt([
        {
            type:"list",
            name:"deletetodo",
            message:chalk.yellowBright("Select to delete ToDo : "),
            choices:todoList.map(list=>list)
        }
    ])
    return deletetodos
}