// rest

function sumNumbers (...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0)
}
console.log(sumNumbers(1,2,3,6))// 12

console.log(sumNumbers(10,30))// 40

console.log(sumNumbers( ))// 0

console.log(sumNumbers(5,10,15,20,25,30))// 105