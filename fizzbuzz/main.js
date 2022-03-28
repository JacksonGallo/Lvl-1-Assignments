fizzBuzz = () => {

    const tracker = {
        FizzBuzz: 0,
        Fizz: 0,
        Buzz: 0,
    }

    for (let i = 1; i<=100; i++) {
        if ( (i % 3 === 0) && (i % 5 === 0) ) {
            console.log("FizzBuzz")
            tracker.FizzBuzz ++ 
        } else if (i % 3 === 0) {
            console.log("Fizz") 
            tracker.Fizz ++
        } else if (i % 5 === 0) {
            console.log("Buzz") 
            tracker.Buzz ++
        } else {
            console.log(i) 
        }
    }

    return tracker
}

console.log(fizzBuzz())