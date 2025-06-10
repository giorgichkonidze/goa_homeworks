// every method

let number = [2,4,6,8]
let evens = number.every(num => num % 2 === 0)

console.log(evens)

// some method

let numbers = [1, 5, 7, 3]
let result = numbers.some(num => num % 2 === 0)

console.log(result)


// map method

let nuMbers = [1,2,3]
let squares = nuMbers.map(num => num * num)

console.log(squares)