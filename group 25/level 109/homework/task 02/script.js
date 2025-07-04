const productPrice = {
    bread: 1.30,
    apple: 1.1,
    milk: 4.6
}
let total = 0
for (let key in productPrice) {
    total += productPrice[key]
}
console.log("sum", total)