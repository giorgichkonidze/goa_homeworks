let a = "hello" // a - "hello"
let b = a // b - "hello"
b = "world" // b შეცვალა, a - "hello"
// console.log(a)
// console.log(b)
// print - hello world

let x = {name: "janeza"} // შეიქმნა ობიექტი name - "janeza"
let y = x // y - იგივე ობიექტი რაც x
y.name = "Master" //ობიექტის name ის თვისება უცვლება master ით
console.log(x.name)
console.log(y.name)
// print -  Master Master