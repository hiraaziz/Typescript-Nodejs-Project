import gradient from 'gradient-string';
import { currencylist } from './CurrencyList.js';
export function Currrency_Conversion(currency) {
    // finding the index of current currency
    let currCurrency_Index = currencylist.findIndex(list => list.currency_code === currency.currentcurrency);
    // getting the value of of current currency, which is equal to 1 USD
    let currCurrency_value = currencylist[currCurrency_Index].value;
    // finding the index of conversion currency
    let convCurrency_Index = currencylist.findIndex(list => list.currency_code === currency.conversioncurrency);
    // getting the value of of conversion currency, which is equal to 1 USD
    let convCurrency_value = currencylist[convCurrency_Index].value;
    // Calculating how many current currency equal to 1 USD
    let one_usd = currency.currentvalue / currCurrency_value;
    let conversion = one_usd * convCurrency_value;
    console.log(gradient.teen(`\n${currency.currentvalue} ${currency.currentcurrency} = ${conversion} ${currency.conversioncurrency}`));
}
