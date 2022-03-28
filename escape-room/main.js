const readline = require("readline-sync");
const name = readline.question("What is your name? ");


let hasKeyOpensDoor = false 

console.log("Hello " + name)

while (hasKeyOpensDoor !== true) {
    const decision = readline.question("What is your decision? You can 1. put hand in hole 2. find the key or 3. open the door: ? ")
   
    if (decision === "put hand in hole") {
    console.log("you have died, thank you for playing")
    } else if ( decision === "find the key") {
            let decisionWithKey =  readline.question("Okay, now what? You can either 1. put hand in hole or 2. open the door: ? ")
            if (decisionWithKey === "put hand in hole") {
            console.log("you have died, thank you for playing")
             } else {
            hasKeyOpensDoor = true;
            console.log("Congratulations! You have escaped!");
             }

    } else {
    console.log("The door is locked. Key needed.")
    }  

}