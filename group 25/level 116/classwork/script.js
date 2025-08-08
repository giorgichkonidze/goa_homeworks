var old = {
     name: 'giorgi',
     age: 19,
     greet: function() {
         console.log('hi, my name is' + this.name)
    }
}
old.greet()
// ძველი ტიპის ობიექტი დაწერილია ჩვეულებრივი, ობიექტის სინტაქსით

let name = 'gela'
let age = 13

const newperson = {
    name,
    age, 
    greet() {
        console.log(`hi my name is${this.name}`)
    }
}
// შემცირებულია სინტაქსი.მოკლედაა ჩაწერილი ფუნქცია