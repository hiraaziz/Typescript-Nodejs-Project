#! /usr/bin/env node
import inquirer from 'inquirer'
import chalk from 'chalk'
import chalkAnimation from 'chalk-animation'
import { userAuthentication } from './UserAuthentication.js'
import { Balance_Inquiry } from './BalanceCheck.js'
import { cash_withdraw } from './CashWithdraw.js'
import { Recipt } from './Receipt.js'
import { MoneyTransfer } from './Money_Transfer.js'

type Options={
    option:string
}

let username:string
let trans_continue:boolean =true

do{
    await welcome()

    /* ---------Step 1----------
       Authenticate user    */
    username = await userAuthentication()
    console.log(`\n Welcome ${username}`)

    /* ---------Step 2----------
        Perform transaction     */
    await Atm_Transaction()

    /* --------Step 3-----------
        Ask to continue     */
    let continues = await inquirer.prompt({
        type:"confirm",
        name:"continue",
        message:chalk.yellowBright("\n Do you want to continue ? ")
    })

    trans_continue = continues.continue? true : false
    console.clear()

}while(trans_continue === true)

async function Atm_Transaction() {

        const balance:number = Math.floor(1000+Math.random() * (10000-1000)) ; 
        let option:Options = await CurrentAccOptions()

        if(option.option == 'Balance Inquiry'){
            Balance_Inquiry(balance)
        }

        else if(option.option == 'Cash Withdraw'){
            const withdraw:number = await cash_withdraw(balance)
            await Recipt(username,withdraw,balance)
        }

        else if(option.option == 'Money Transfer'){
            const transfer:number = await MoneyTransfer(balance)
            await Recipt(username,transfer,balance)
        }

}

const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,1000);
    })
}

async function welcome(){
    
    let rainbowTitle  = chalkAnimation.rainbow(`Welcome to ATM MACHINE`);
    await sleep();
    rainbowTitle.stop();
}

async function CurrentAccOptions():Promise<Options>{

    let option:Options = await inquirer
    .prompt([
        {
            type:"list",
            name:"option",
            message:chalk.yellowBright("Which Transaction you want to perform"),
            choices:['Balance Inquiry','Cash Withdraw','Money Transfer']
        }
    ])
    return option
}