import { exit } from 'process';
import inquirer from 'inquirer'
import gradient from 'gradient-string';

export async function BackOption(selectedOption: ()=>void) {
    let back:{backoption:string} = await inquirer.prompt([
        {
            type:"list",
            name:"backoption",
            message:gradient.morning("Go Back or Exit"),
            choices:["Go Back","exit"]
        }
    ])
    if(back.backoption == "Go Back"){
        console.clear()
        selectedOption()
    }else{
        exit()
    }
}