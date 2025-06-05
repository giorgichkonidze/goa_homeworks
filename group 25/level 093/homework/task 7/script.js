let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let nestedArray = [7, [8, 9], [10, [11, 9]]]

let combinedArray = arr1.concat(arr2)
console.log(combinedArray)

combinedArray.copyWithin(4, 0, 2)
console.log(combinedArray)

combinedArray.fill(0, 2, 4)
console.log(combinedArray)
combinedArray.pop()
console.log(combinedArray)

combinedArray.shift()
console.log(combinedArray)

combinedArray.unshift(10, 20)
console.log(combinedArray)

combinedArray.splice(2, 2, 30, 40)
console.log(combinedArray)
let slicedArray = combinedArray.slice(-3)
console.log(slicedArray)

let joinedString = slicedArray.join(".")
console.log(joinedString)

let flatArray = nestedArray.flat(2)
console.log(flatArray)

let includesNine = flatArray.includes(9)
console.log(includesNine)

let indexOfTen = flatArray.indexOf(10)
console.log(indexOfTen)

let lastIndexOfNine = flatArray.lastIndexOf(9)
console.log(lastIndexOfNine)
flatArray.push(13);
console.log(flatArray);