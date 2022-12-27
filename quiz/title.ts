import chalkAnimation from 'chalk-animation'
import figlet from 'figlet'
import gradient from 'gradient-string'

const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,1000);
    })
}

export async function title(){

    console.log(gradient.teen(figlet.textSync('Currency Converter APP', {
        font: 'Banner3',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 150,
        whitespaceBreak: true
    })));
    sleep()
}