const sumArray = (arr = [1,2,3]) => arr.reduce((sum, num) => sum + num, 0)

console.log(sumArray([4,5,6]))
console.log(sumArray([]))
console.log(sumArray())