#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let myBalance = 2000000;
let myPin = 1234;
console.log(chalk.yellow.bold("================== welcome to Fahad Jabbar code ! ATM MACHINE =================="));
let pinAnswer=await inquirer.prompt([
    {
        type:'password',
        name:'pin',
        message:'Enter your pin code = '
    }
])
if(pinAnswer.pin==myPin){
    console.log(chalk.green("================= pin is correct,Login is successfully ================="));
    let Answer1=await inquirer.prompt([
        {
            type:'list',
            name:'operation',
            message:chalk.yellow('Select an operation = '),
            choices:['Withdraw Amount','check Balance']
        }
    ])
    if(Answer1.operation == "Withdraw Amount"){
        let amountAns=await inquirer.prompt([
            {
                type:'number',
                name:'amount',
                message:'Enter the amount to Withdraw ='
            }
        ])
        if(amountAns.amount > myBalance){
            console.log(chalk.yellow("Insufficient Balance"));
        }else{
            myBalance -= amountAns.amount;
            console.log(chalk.white(`your Remaining Balance : ${myBalance}`));
        }
    }
    if(Answer1.operation == 'check Balance'){
        console.log(chalk.white(`your Remaining Balance : ${myBalance}`));
    }
}else{
    console.log(chalk.red("============= pin is INCORRECT, Try Again ============="));
}
console.log(chalk.yellow("==================== Thank you for use my atm machine, Good Bye ===================="));
