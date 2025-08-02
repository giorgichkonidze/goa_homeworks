const users = [
    {name: 'jon', age: 24},
    {name: 'bob', age: 18},
    {name: 'giorgi', age: 40}
]
const alladult = users.every(user => user.age >=18)

console.log(alladult)