//// classwork1

let number = [1,2,3,4,5]

number.forEach(function(num) {
    console.log(`${num * num}`)
})

// classwork 2

let prices = [10, 20, 30]
let total = prices.reduce((sum, price) => sum + price, 0)

console.log(`SUM PRICES= ${total}`)