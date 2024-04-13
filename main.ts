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
        let Withdrawans=await inquirer.prompt([
            {
                type:'list',
                name:'withdrawmethod',
                message:'select a withdraw method',
                choices:['Fast cash','Enter amount']
            }
        ])
        if(Withdrawans.withdrawmethod=='Fast cash'){
            let fastcashans=await inquirer.prompt([
                {
                    name:'fashcash',
                    type:'list',
                    message:'select option:',
                    choices:[1000,2000,3000,10000,50000]
                }
            ])
            if(fastcashans.fashcash>myBalance){
                console.log(chalk.yellow('Insufficient Balance'));
            }else{
                myBalance-=fastcashans.fashcash;
                console.log(`${fastcashans.fashcash} withdraw successfully.`);
                console.log(`your Remaining Balance : ${myBalance}`);
            }
        }
        else if(Withdrawans.withdrawmethod=='Enter amount'){
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
                console.log(`${amountAns.amount} withdraw successfully.`);
                console.log(chalk.white(`your Remaining Balance : ${myBalance}`));
            }
        }
    }
    else if(Answer1.operation == 'check Balance'){
        console.log(chalk.white(`your Remaining Balance : ${myBalance}`));
    }
}else{
    console.log(chalk.red("============= pin is INCORRECT, Try Again ============="));
}
console.log(chalk.yellow("==================== Thank you for use my atm machine, Good Bye ===================="));
