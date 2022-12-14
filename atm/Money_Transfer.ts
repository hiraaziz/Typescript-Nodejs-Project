import inquirer from 'inquirer'
import chalk from 'chalk'

export async function MoneyTransfer(balance:number):Promise<number>{

    let transfer = await inquirer
        .prompt([
            {
                type:"input",
                name:"accNo",
                message:chalk.yellowBright(`\n Enter Account Number : `),
            },
            {
                type:"input",
                name:"amount",
                message:chalk.yellowBright(`Your Current Balance is ${balance}. Please enter amount to transfer : `),
            }
        ]).then((ans)=>{
            console.log(chalk.greenBright(`\t${ans.amount} has been transfered to account ${ans.accNo}`))
            return ans
        }
        )
       
        return transfer.amount
}