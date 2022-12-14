#! /usr/bin/env node
import inquirer from 'inquirer'
import chalk from 'chalk'
import chalkAnimation from 'chalk-animation'

const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,1000);
    })
}

async function welcome(){
    let rainbowTitle  = chalkAnimation.rainbow('Guess a Number!');
    await sleep();
    rainbowTitle.stop();
}
welcome()

type numguess = {
    guessnumber:number
}

// Ask to guess a number and return guess number
async function guessNumber():Promise<numguess>{
    let guessnums =  await inquirer.prompt([
        {
            type:"number",
            name:'guessnumber',
            messgae:chalk.green("Guess a random number \n")
        }
    ])
   return guessnums
}

// Function will run on every round and ask question 3 times and calculate score
async function calculation(num:number){
    let score:number = 0

    for(let i=0;i<3;i++){
        const random_number = Math.floor(Math.random() * num) + 1;
        let numberguess = await guessNumber()

        console.log("random one :",random_number)
        if(numberguess.guessnumber === random_number) {
            console.log('In  score matching')
            score= score+1
        }
    }
    return score
}
// Starting point
async function AskAgain(){
    let Round_onescore:number = 0
    let Round_twoscore:number = 0

    console.log("-----------Round One----------")
    console.log("Guess a number between 1-10---->")
    Round_onescore= await calculation(10)

    console.log("\n-----------Round Two----------")
    console.log("Guess a number between 1-100---->")
    Round_twoscore = await calculation(100)
    
    console.log(chalk.bgMagentaBright('Round One Score: ',Round_onescore,'\n'))
    console.log(chalk.bgMagentaBright('Round Two Score: ',Round_twoscore))
}
AskAgain()