#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
function welcome() {
    return __awaiter(this, void 0, void 0, function* () {
        let rainbowTitle = chalk_animation_1.default.rainbow('Guess a Number!');
        yield sleep();
        rainbowTitle.stop();
    });
}
welcome();
function guessNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        let guessnums = yield inquirer_1.default.prompt([
            {
                type: "number",
                name: 'guessnumber',
                messgae: chalk_1.default.green("Guess a random number \n")
            }
        ]);
        return guessnums;
    });
}
function calculation(num) {
    return __awaiter(this, void 0, void 0, function* () {
        let score = 0;
        for (let i = 0; i < 3; i++) {
            const random_number = Math.floor(Math.random() * num) + 1;
            let numberguess = yield guessNumber();
            console.log("random one :", random_number);
            if (numberguess.guessnumber === random_number) {
                console.log('In  score matching');
                score = score + 1;
            }
        }
        return score;
    });
}
function AskAgain() {
    return __awaiter(this, void 0, void 0, function* () {
        let Round_onescore = 0;
        let Round_twoscore = 0;
        console.log("-----------Round One----------");
        console.log("Guess a number between 1-10---->");
        Round_onescore = yield calculation(10);
        console.log("\n-----------Round Two----------");
        console.log("Guess a number between 1-100---->");
        Round_twoscore = yield calculation(100);
        console.log(chalk_1.default.bgMagentaBright('Round One Score: ', Round_onescore, '\n'));
        console.log(chalk_1.default.bgMagentaBright('Round Two Score: ', Round_twoscore));
    });
}
AskAgain();
