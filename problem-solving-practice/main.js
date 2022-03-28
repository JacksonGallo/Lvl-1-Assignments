largest = arr => {
    let currentMax = 0
    for (i=0; i<arr.length; i++) {
        if (arr[i] > currentMax) {
            currentMax = arr[i]
        }
    }
    return currentMax
}



console.log(largest([101, 5, 8, 1, 2, 100]))


lettersWithStrings = (arr, a) => {
    let newArray = []
    for (i=0; i<arr.length; i++) {
        if (arr[i].indexOf(a) >= 0) {
            newArray.push(arr[i])
        }
    }
    return newArray
}

console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))


isDivisible = (num1, num2) => {
    if (num1 % num2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isDivisible(7,3))