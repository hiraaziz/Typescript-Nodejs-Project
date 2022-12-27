#! /usr/bin/env node
import inquirer from 'inquirer'
import chalk from 'chalk'
import { title } from './title.js'
import { fetchQuizQuestions } from './API.js'
import {QuestionsCardType} from './Types.js'

let quiz_continue:boolean =true
let shuffle_options: string[] = []
let score:number = 0

do{
    await title()
    
    // fetching data from API
    const data:QuestionsCardType[] = await  fetchQuizQuestions()

    for(let i=0; i<5; i++){

        shuffle_options=[]
        shuffle_options=data[i].incorrect_answers
        shuffle_options.push(data[i].correct_answer)
        shuffle_options.sort(() => Math.random() - 0.5)

        let ans:{option:string}= await inquirer
        .prompt([
        {
            type:"list",
            name:"option",
            message:chalk.yellowBright(data[i].question),
            choices:shuffle_options
        }
        ])
        if(ans.option === data[i].correct_answer){
            score = score + 1
        }

    }
    console.log(chalk.greenBright('Your score is = ',score))

    /* --------Step 3-----------
        Ask to continue     */
    let continues = await inquirer.prompt({
        type:"confirm",
        name:"continue",
        message:chalk.yellowBright("\n Do you want to continue ? ")
    })

    quiz_continue = continues.continue? true : false
    console.clear()

}while(quiz_continue === true)