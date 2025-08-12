const mySet = new Set()

mySet.add(1)
mySet.add(2)
mySet.add(3)

console.log(mySet.has(2))

console.log(mySet.size)

mySet.delete(2)

mySet.clear()
console.log(mySet.size)

const fruits = new setInterval(['banana', 'apple','orange'])
fruits.forEach(fruits => console.log(fruits))

const fruitArray = [...fruits]
console.log(fruitArray)

const set1 = new Set ([1,2,3])
const set2 = new Set ([3,4,5])
const union = new Set ([...set1, ...set2])
console.log(union)

const intersection = new Set([...set1].filter(x => set2.has(x)))
console.log(intersection)