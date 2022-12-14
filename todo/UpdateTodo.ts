import inquirer from 'inquirer'
import { update } from './Types.js'
import gradient from 'gradient-string'
import chalk from 'chalk'
export async function UpdateTodo(todoList:string[]):Promise<update> {

    console.clear()

    let update:update = await inquirer.prompt([
            {
                type:"list",
                name:"oldtodo",
                message:chalk.yellowBright("Select To Do to update : "),
                choices:todoList.map(list=>list)
            },
            {
                type:"input",
                name:"newtodo",
                message:chalk.yellowBright("Write Update To do : ")
            }
        ])

    return update
}