#! /usr/bin/env node
import figlet from 'figlet';
import gradient from 'gradient-string';
import { currencylist } from './CurrencyList.js';
import { Ask_Currency } from './AskCurrencies.js';
import { Currrency_Conversion } from './currencyConversion.js';
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
async function title() {
    console.log(gradient.teen(figlet.textSync('Currency Converter APP', {
        font: 'Banner3',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 150,
        whitespaceBreak: true
    })));
}
function Show_Currency() {
    console.log('\nCurrency Codes\n');
    console.table(currencylist);
}
// This will display title of Application 
await title();
await sleep();
// Display currencies code
Show_Currency();
// Get the Currenct currency and conversion currency value
let currency = await Ask_Currency();
// Convert Currencies
Currrency_Conversion(currency);
