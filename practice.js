
// This function calculates the a persons age in dog years based on the input age

const calculateAgeInDogYears = (age) => {
    const ageInDogYears = age / 7
    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(22)
console.log(dogAge)


// Dog Breeds

const favDog = (dogBreed) => {

    if (dogBreed === "meow"){
        const dogString = "I like cats."
        return dogString
    }
    const dogString = `My favorite dog breed is ${dogBreed}.`
    return dogString
}

const myFav = favDog("schnauzer")
// const myFav = favDog("meow")
console.log(myFav)

console.log(`When it comes to pets, ${myFav}`)




// Defining a function with multiple params per function

const add = (numb2 , numb1, numb3) => {
    const sum = numb1 + numb2 + numb3
    return sum
}

const product = add(17,4,11)
console.log(product)

// Self driving Cars

const go = (direction, speed) => {
    if (speed >= 75){
        const message = `The car is moving ${direction} at ${speed} mph. SLOW DOWN!`
        return message
    }
    const message =`The car is moving ${direction} at ${speed} mph.`
    return message
}

const dirSpeed = go("backward",65)
console.log(dirSpeed)


// Evens and Odds

const evenOrOdd = (num) => {
    if (num % 2 === 0){
        const answer = "Even"
        return answer
       } 
       const answer= "Odd"
       return answer
}

const result = evenOrOdd(2)
console.log(result)

// Evens and Odds with a looped array

const numbers =[
    23,
    45,
    32,
    50,
    34,
    18,
    19,
    25
]
const evenOddArr = []


const evenOrOdd2 = (num) => {
    if (num % 2 === 0){
        const answer = "Even"
        return answer
       } 
       const answer= "Odd"
       return answer
}


for (const number of numbers) {
    const result = evenOrOdd2(number)
    evenOddArr.push(`${number} is an ${result} number.`)
}

console.log(evenOddArr)


// Practice: Double Functions

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]
const filteredArr = []
const filter = (arr) => {
    if (arr.startsWith("k") === false) {
       filteredArr.push(arr)
       return
    }
    return
}

for (const word of words){
    filter(word)
}

console.log( filteredArr.join(" ") + ".")


// Practice: You can Tune a piano

const chance = (num) => {
    const random = Math.random() * num
    if (random <= 2){
        console.log("Svenb came up empty-handed. :(")
        return
    }
    console.log("Svenb hooked a tuna! :)")
    return
}

chance(4)

//  Practice Chores, Different Days
const person = {
    firstName: "Donald",
    lastName: "McLelland"
}

const chore1 = person => `${person.firstName} ${person.lastName} took out the trash.`
const chore2 = person => `${person.firstName} ${person.lastName} washed the dishes.`
const chore3 = person => `${person.firstName} ${person.lastName} did laundry.`
const chore4 = person => `${person.firstName} ${person.lastName} swept the house.`
const chore5 = person => `${person.firstName} ${person.lastName} washed the car.`
const chore6 = person => `${person.firstName} ${person.lastName} cooke food.`


console.log(chore1(person))
console.log(chore2(person))
console.log(chore3(person))
console.log(chore4(person))
console.log(chore5(person))
console.log(chore6(person))

