#!/usr/bin/env node_modules/
// SIMPLE CALCULATOR
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number",
        type: "number",
        name: "firstNumber" },
    { message: "Enter second number",
        type: "number",
        name: "secondNumber",
    },
    { message: "Select one of the Operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplicatin", "Division"],
    },
]);
// Conditional Statements
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplicatin") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invalid Operator");
}
