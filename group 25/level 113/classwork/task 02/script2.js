// filter/ task 01

let numbers = [1,2,3,4,5,6,7,8,9,10]
let evenNums = numbers.filter(num => num % 2 === 0)

console.log(evenNums)

// filter/ task 02

let users = [
    {name :'Giorgaa', active : true},
    {name :'Artura', active: false},
    {name : 'yes mama', active: true}
]  
let isActive = users.filter (checkStatus => checkStatus.active)

console.log(users)
console.log(isActive)

// filter/ task 03

let words = ['apple', 'janeza', 'luka', 'nika', 'shavla']
let longWord = words.filter(words => words.length >= 5)

console.log(longWord)