// for in
// გადადის ობიექტის შიდა სახელებზე და არა მნიშვნელობებზე
let arr = [1,2,3,4,5]
let person = {
    name: 'gio',
    lastName: 'chkona',
    group: '24&25'
}

for(let info in person) {
    console.log(person[info])
}

// for of

// აბრუნებს მხოლოდ ელემენტებს
let cars = ["mersedes", "BMW", "Tesla"]

for(let car of cars) {
    console.log(car)
}

//arrow fun
// არის ფუნქციის მოკლე ჩაწერის ხერხი, რომელიც გამოიყენება მოკლე ფუნქციისთის
function x() {
    return x
}
//console.log(x())

const x2 = function() {
    return 'anunymus func type'
}
//console.log(x2())

const x3 = () => 'arrow func type'
// console.log(x3())

// default parameters
// საშუალებას გაძლევს , პარამეტრს მივანიჭოთ ნაგულისხმევი მნიშვნელობა, თუ ის გადაეცა ფუნქციას.
function user(name = "guest") {
    console.log("hello, " + name +", how are you")
}
user("Mgela")
user()