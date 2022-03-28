// player's overall hp starting point
let playerHp = 100
let coins = 0

// readline set up / initial question
const readline = require("readline-sync");
const name = readline.question("Ahoy! Savvy yourself a buccaneer ehh? What's your name? ");

console.log(`Ayeee ${name}, hop aboard!`);

// major loop that will architect the game
while (playerHp > 0) {

    //"treasure chest" that will display name/hp/items from battle
    const treasureChest = {
        Buccaneer: name,
        Health: playerHp,
        Coins: coins,
    }

    const decision = readline.question("Enter (s) to set sail, or (t) to check your treasure chest: ")
        if (decision === "s") {
            setSail ()
        } else if (decision === "t") {
            console.log(treasureChest)
        }


    //functions that will get called during the game 

    // first function, activated after pressing 's' to set sail, determines if an enemy will appear
    function setSail () {
        console.log("A friendly breeze guides us through the Caribbean")
        let chanceOfEnemy = Math.random();
        //change to 0.0 to simplify enemy attack testing
        if (chanceOfEnemy >= 0.0) {
            enemyAppears()
        } 
    }

    //second function, decides which of 3 enemeies will appear if above ^ hits
    const enemyAppears = () => { 
        let typeOfEnemy = Math.random()
        if (typeOfEnemy < .3){
            console.log("Pirates have attacked!")
            enemyAttack()
        } else if (typeOfEnemy < .7) {
            console.log("The Flying Dutchman has attacked!")
            enemyAttack()
        } else {
            console.log("A kraken has attacked!")
            enemyAttack()
        }
    }
    

    //changed to one enemy attack
    function enemyAttack () {
        const fightOrRun = readline.question("Enter (f) to fight or (r) to run: ")
        if (fightOrRun === "f") {
            fight ()
        } else if (fightOrRun === "r") {
            runAway ()
        }
    }

    //determining the damage dealt 
    function randomDamage () {
        return Math.floor(Math.random() * 100)
    }

    // fight function called no matter the enemy
    function fight () {
        let enemyHp = 100;
        console.log("Let the battle begin")
        while ((enemyHp > 0) && (playerHp > 0)) {
            enemyHp -= randomDamage()
            if (enemyHp >= 0){
                playerHp -= randomDamage()
            }
        }
        if (enemyHp > 0) {
            console.log("Davey Jones' locker awaits,,, GAME OVER.")
        } else {
            playerHp += 10
            coins += Math.floor(Math.random() * 100)
            console.log(`Congrats, enemy defeated! +10 Hp, for a total Hp: ${playerHp}. Looted for coins and you now have ${coins}.`)
        }
    }

    // attempting to escape function
    function runAway () {
        let chanceOfEscaping = Math.random()
        if (chanceOfEscaping <= .5) {
            console.log("Too slow! Hoist the colors for battle!")
            fight ()
        } else {
            console.log("Calypso is with us today, we have escaped, for now,,,")
            
        }
    }

}

