const readline = require("readline-sync")

let num1 = readline.questionInt("Please enter your first number: ")

let num2 = readline.questionInt("Please enter your second number: ")

let operation = readline.question("Please enter the operation to perform: add, sub, mul, div: ")

function add() {
    return "The result is " + (num1 + num2)
}

function mul() {
    return "The result is " + (num1 * num2)
}

function div() {
    return "The result is " + (num1 / num2)
}

function sub() {
    return "The result is " + (num1 - num2)
}

if (operation === "add") {
    console.log(add())
} else if (operation === "sub") {
    console.log(sub())
} else if (operation === "mul") {
    console.log(mul())
}
else {
    console.log(div())
}