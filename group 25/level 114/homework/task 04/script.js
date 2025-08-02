const users = [
  { name: "george", age: 25 },
  { name: "nika", age: 19 },
  { name: "oto", age: 30 }
]
const allAdults = users.every(user => user.age >= 18)