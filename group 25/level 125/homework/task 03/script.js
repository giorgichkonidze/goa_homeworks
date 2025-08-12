const emptySet = new Set()
console.log(emptySet)

emptySet.add('cat')
emptySet.add('dog')
emptySet.add('parrot')
console.log(emptySet)

console.log(emptySet.has('dog'))

emptySet.delete('parrot')
console.log(emptySet)

console.log(emptySet.size)

const numberSet = new Set([10, 20, 30])
for (const num of numberSet) {
  console.log(num)
}

numberSet.clear()
console.log(numberSet.size)

const arr = [1, 2, 2, 3, 4, 4]
const setFromArray = new Set(arr)
console.log(setFromArray)

const arrFromSet = [...setFromArray]
console.log(arrFromSet)

function hasDuplicates(array) {
  return new Set(array).size !== array.length
}

console.log(hasDuplicates([1, 2, 3]))
console.log(hasDuplicates([1, 2, 2, 3]))