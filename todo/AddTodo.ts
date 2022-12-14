import inquirer from 'inquirer'
import { ShowTodo } from './ShowTodo.js'
import chalk from 'chalk'
import gradient from 'gradient-string'

export async function AddTodo(todoList:string[]):Promise<string> {
    
    if(todoList.length==0){
        console.log(gradient.morning('\nYour To Do list is empty! \n'))
    }else ShowTodo(todoList)

    let add:{addtodo:string} = await inquirer.prompt([
        {
            type:"input",
            name:"addtodo",
            message:chalk.yellowBright("Write your todo :  "),
        }
    ])
    return add.addtodo

}