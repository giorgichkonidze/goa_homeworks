const numberSet = new Set([1,2,3,4,5])
console.log(numberSet)

const fruitSet = new Set(['apple', 'banana'])
fruitSet.add('orange')
console.log(fruitSet)

fruitSet.add('apple')
console.log(fruitSet)

console.log(fruitSet.has('banana'))

fruitSet.delete('banana')
console.log(fruitSet)

const colors = new Set(['red', 'green', 'black'])
for (const color of colors) {
    console.log(color)
}

const nameSet = new Set (['nika', 'luka', 'avto'])
const nameArray = [...nameSet]
console.log(nameArray)

const arrayDublicates = [1,2,2,3,3,4]
const uniqueaArray = [...new Set(arrayDublicates)]
console.log(uniqueaArray)

const letters = ['a', 'b', 'a', 'c', 'b']
const uniqueaLetters = new Set(letters).size
console.log(uniqueaLetters)

const mySet2 = new Set(['x', 'y', 'z'])
console.log(mySet2.size)
mySet2.clear()
console.log(mySet2.size)