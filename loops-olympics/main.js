//prelims


for (i=9; i>=0; i--) {
    console.log(i)
}

for (i=0; i<=9; i++) {
    console.log(i)
}


const fruit = ["banana", "orange", "apple", "kiwi"]

for (i=0; i<fruit.length; i++) {
    console.log(fruit[i])
}

//bronze

const numberArray = []

//numberArray.push("hello")
//console.log(numberArray)

for (i=0; i<=9; i++) {
    numberArray.push(i)
}
console.log(numberArray)



for (i=0; i<=100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}



const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for (i=0; i<fruit.length; i++) {
    if (i % 2 !== 0) {
        console.log(fruit[i])
    }
}


//silver


const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

const everyOtherName = []
const everyOtherOccupation = []

  for (i=0; i<peopleArray.length; i++) {
      if (i % 2 === 0){
          everyOtherName.push(peopleArray[i].name)
      } else {
          everyOtherOccupation.push(peopleArray[i].occupation)
      }
  }

console.log(everyOtherName)
console.log(everyOtherOccupation)



const names = []
const occupations = []

for (i=0; i<peopleArray.length; i++) {
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
}


console.log(names)
console.log(occupations)
  
  for (i=0; i<peopleArray.length; i++){
      console.log(peopleArray[i].name)
  }

 



let bigArray = []

for (i=0; i<3; i++) {
    let newArray = []
    for (j=0; j<3; j++){
    newArray.push("x")    
    }
    bigArray.push(newArray)    
}
console.log(bigArray)