import inquirer from 'inquirer'
import chalk from 'chalk'

export async function Recipt(username:string,deduct_amount:number,balance:number){
    
    let pin = await inquirer
        .prompt([
            {
                type:"confirm",
                name:"confirm",
                message:chalk.yellowBright("Do you want Receipt?: "),
            }
        ]).then((ans)=>{
            if(ans.confirm == true){
                console.log(chalk.greenBright(`\n\tAccount Name : ${username}`))
                console.log(chalk.greenBright(`\tdeduct_amount Amount : ${deduct_amount}`))
                console.log(chalk.greenBright(`\tRemaining Balance : ${balance-deduct_amount}\n`))
            }
        })
        return pin
}