var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
fruit.shift()
let orangeIndex = fruit.indexOf("orange")
fruit.push(orangeIndex)
let veggieLength = vegetables.length
vegetables.push(veggieLength)
let food = fruit.concat(vegetables)
food.splice(4,2)
food.reverse()
let foodName = food.join()


console.log(foodName)