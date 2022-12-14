#! /usr/bin/env node
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { AddTodo } from './AddTodo.js';
import { ShowTodo } from './ShowTodo.js';
import { UpdateTodo } from './UpdateTodo.js';
import { deletetodosTodo } from './DeleteTodo.js';
import { BackOption } from './BackOption.js';
import { exit } from 'process';
import { title } from './Title.js';
let todoList = ["Pending Assignment", "complete typescript projects"];
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
await title();
await sleep();
await selectOptions();
async function selectOptions() {
    if (todoList.length == 0) {
        console.log('\nYour To Do list is empty! \n');
    }
    else
        ShowTodo(todoList);
    let selectedOption = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: chalk.yellowBright.bold("What you want to do? "),
            choices: ["ADD TO DO", "UPDATE TO DO", "DELETE TO DO", "EXIT"]
        }
    ]);
    if (selectedOption.option == 'ADD TO DO') {
        console.clear();
        let add = await AddTodo(todoList);
        todoList.push(add);
        console.clear();
        ShowTodo(todoList);
        BackOption(selectOptions);
    }
    else if (selectedOption.option == "UPDATE TO DO") {
        if (todoList.length == 0) {
            console.clear;
            console.log(gradient.morning('\nYour To Do list is empty! \n'));
            BackOption(selectOptions);
        }
        else {
            let update = await UpdateTodo(todoList);
            console.log('UPDATED');
            let Index = todoList.findIndex((list) => list === update.oldtodo);
            todoList[Index] = update.newtodo;
            console.clear();
            ShowTodo(todoList);
            BackOption(selectOptions);
        }
    }
    else if (selectedOption.option == "DELETE TO DO") {
        if (todoList.length == 0) {
            console.clear();
            console.log(gradient.morning('\nYour To Do list is empty! \n'));
            BackOption(selectOptions);
        }
        else {
            let deletetodos = await deletetodosTodo(todoList);
            let Index = todoList.findIndex((list) => list === deletetodos.deletetodo);
            todoList.splice(Index, 1);
            console.clear();
            ShowTodo(todoList);
            BackOption(selectOptions);
        }
    }
    else {
        console.clear();
        exit();
    }
}
