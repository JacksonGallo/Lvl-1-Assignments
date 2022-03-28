/*
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler",  "computer"]

function computerCount() {
    let count = 0;
    for (i = 0; i < officeItems.length; i++) {
        if (officeItems[i] === "computer") {
            count++
        }
    }
    return count
}

console.log(computerCount(officeItems))


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

for (i=0; i<peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +" is old enough, let HIM in.")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough, let HER in.")
        }
    } else {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +" is not old enough, do NOT let HIM in.")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, do NOT let HER in.")
        }
    }
}      

*/



let toggleSwitch = [2,2,2]

const sum = toggleSwitch.reduce(function(a,b) {return a + b; }, 0)

if (sum % 2 === 0) {
    console.log("the light is off")
} else {
    console.log("the light is on")
}
