/*
function capitalizeAndLowercase (str) {
    
    return str.toUpperCase().concat(str.toLowerCase())
    
}

console.log(capitalizeAndLowercase("HelLo"))
*/

/*
function halfStringLength (str) {
    return Math.floor((str.length)/2)
}

console.log(halfStringLength("Hello World"))
*/

/*
function firstHalfString (str) {
    return str.slice(0,(Math.floor((str.length)/2)))
}

console.log(firstHalfString("Hello"))
*/

/*
function firstCapLastLower (str) {
    let firstHalf = str.slice(0,(Math.floor((str.length)/2))).toUpperCase() 
    let secondHalf = str.slice((Math.floor((str.length)/2))).toLowerCase()
    return firstHalf.concat(secondHalf)
}

console.log(firstCapLastLower("Hello"))

*/
/*
function capitalAfterSpace (str) {
    let newString = " "
    for (i=0; i<str.length; i++){
        if (i = " "){
            newString.push(([i+1]).toUpperCase())
        }
    }
    return newString
}
console.log(capitalAfterSpace("hey friends! practice practice practice!"))
*/


function capitalAfterSpace2 (str) {
    let splitString = str.split(" ");
    
    for (i=1; i<splitString.length; i++){
        splitString[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1)
    }
    console.log(splitString)
    let joinedString = splitString.join(" ")
    return joinedString
}

console.log(capitalAfterSpace2("hey friends! practice practice practice!"))
