import  gradient  from 'gradient-string';
import { currencylist } from './CurrencyList.js';
import inquirer from 'inquirer'
import { currency } from './Types.js';

function check_input(currencyCode:string) : number{
    
    let Index = currencylist.findIndex((list)=>list.currency_code === currencyCode)
    return Index
}

export async function Ask_Currency(): Promise<currency> {
    
    let currency:currency = await inquirer.prompt([
        {
            type:"input",
            name:"currentcurrency",
            message:gradient.vice("Enter Current Currency Code :  "),
            validate(ans){
                if(check_input(ans) === -1){ 
                    console.log(gradient.morning('\nPlease enter valid code from above list!\n'))
                }else{
                    return true
                }
            }
        },
        {
            type:"number",
            name:"currentvalue",
            message:gradient.vice("Enter value for conversion :  "),
        },
        {
            type:"input",
            name:"conversioncurrency",
            message:gradient.vice("Enter Conversion Currency Code:  "),
            validate(ans){
                if(check_input(ans) === -1){ 
                    console.log(gradient.morning('\nPlease enter valid code from above list!'))
                }else{
                    return true
                }
            }
        }
    ])

    return currency

}