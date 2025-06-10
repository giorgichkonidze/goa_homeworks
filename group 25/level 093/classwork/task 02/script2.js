let nestedArray = [1, [2, 3], [4, [5, 6]], 7, 8];

let flatArray = nestedArray.flat()
console.log(flatArray)

let fullyFlatArray = nestedArray.flat(2)
console.log(fullyFlatArray)

function chekElement(array, value) {
  return array.includes(value)
}

console.log(chekElement(fullyFlatArray, 3)) 
console.log(chekElement(fullyFlatArray, 10))


function findIndexOfElement(array, value) {
  return array.indexOf(value)
}

console.log(findIndexOfElement(fullyFlatArray, 3))
console.log(findIndexOfElement(fullyFlatArray, 10));

function findLastIndexOfElement(array, value) {
  return array.lastIndexOf(value)
}

console.log(findLastIndexOfElement(fullyFlatArray, 3))
console.log(findLastIndexOfElement(fullyFlatArray, 10))