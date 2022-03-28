var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
    let bigArray = []
    for (let i=0; i<people.length; i++) {
        bigArray.push(people[i])
        
        for (let j=0; j<alphabet.length; j++) {
            bigArray.push(alphabet[j].toUpperCase())
        }
    }
    return bigArray
}
    
    //return people.concat(alphabet)


console.log(forception(people,alphabet))