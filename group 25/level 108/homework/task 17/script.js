const fizzBuzz = num => 
    num % 15 === 0 ? "FizzBuzz" :
    num % 3 === 0 ? "Fizz" :
    num % 5 === 0 ? "Buzz" :
    num

console.log(fizzBuzz(15))
console.log(fizzBuzz(9))
console.log(fizzBuzz(10))