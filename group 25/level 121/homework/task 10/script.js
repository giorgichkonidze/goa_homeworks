class Person {
  constructor(name, age = 30) {
    this.name = name
    this.age = age
  }
}
const p1 = new Person("andria")
const p2 = new Person("nika", 25)

console.log(p1.name, p1.age)
console.log(p2.name, p2.age)