import inquirer from 'inquirer'
import chalk from 'chalk'

export async function cash_withdraw(balance:number):Promise<number>{

    let withdraw = await inquirer
        .prompt([
            {
                type:"input",
                name:"amount",
                message:chalk.yellowBright(`\n Your Current Balance is ${balance}. Please enter the withdrawal amount : `),
                validate(answers){
                    if(answers > balance){
                        console.log(chalk.redBright(' \n Enter amount less than'))
                    }else{
                        return true
                    }
                }
            }
        ]).then((ans)=>{
            console.log(chalk.greenBright(`\t \t ${ans.amount} has been withdrawn`))
            return ans
        })
        return withdraw.amount
}