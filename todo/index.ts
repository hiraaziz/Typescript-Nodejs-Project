#! /usr/bin/env node
import  gradient  from 'gradient-string';
import inquirer from 'inquirer'
import chalk from 'chalk'
import chalkAnimation from 'chalk-animation'
import { AddTodo } from './AddTodo.js'
import { ShowTodo } from './ShowTodo.js'
import { UpdateTodo } from './UpdateTodo.js'
import { update } from './Types.js'
import { deletetodosTodo } from './DeleteTodo.js'
import { BackOption } from './BackOption.js'
import { exit } from 'process'
import { title } from './Title.js'

let todoList:string[] = ["Pending Assignment","complete typescript projects"]

const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,1000);
    })
}

// This will display title of Application 
await title()
await sleep();

await selectOptions()

async function selectOptions(){

    if(todoList.length==0){
        console.log('\nYour To Do list is empty! \n')
    }else ShowTodo(todoList)

    // Select transaction to perform 
    let selectedOption = await inquirer.prompt([
        {
            type:"list",
            name:"option",
            message:chalk.yellowBright.bold("What you want to do? "),
            choices:["ADD TO DO", "UPDATE TO DO", "DELETE TO DO", "EXIT"]
        }
    ])

    // Based on selected transaction 
    if(selectedOption.option == 'ADD TO DO'){

        console.clear()
        // call function to add todos
        let add:string = await AddTodo(todoList)
        todoList.push(add)
        console.clear()
        ShowTodo(todoList)          // Show the updated list of todos
        BackOption(selectOptions)   // Display two options 1 - Go back or exit
    }

    else if(selectedOption.option == "UPDATE TO DO"){

        if(todoList.length==0){
            console.clear
            console.log(gradient.morning('\nYour To Do list is empty! \n'))
            BackOption(selectOptions)
        }else{

            // call function to edit todo
            let update:update = await UpdateTodo(todoList)
            console.log('UPDATED')
            let Index = todoList.findIndex((list)=> list === update.oldtodo)  //find index of old todo
            todoList[Index] = update.newtodo
            console.clear()
            ShowTodo(todoList)
            BackOption(selectOptions)
        }
    }

    else if(selectedOption.option == "DELETE TO DO"){
        
        if(todoList.length==0){
            console.clear()
            console.log(gradient.morning('\nYour To Do list is empty! \n'))
            BackOption(selectOptions)
        }else{
            let deletetodos = await deletetodosTodo(todoList)
            let Index = todoList.findIndex((list)=> list === deletetodos.deletetodo)
            todoList.splice(Index,1)
            console.clear()
            ShowTodo(todoList)
            BackOption(selectOptions)
        }
    }
    
    else{
        console.clear()
        exit()
    }
}

