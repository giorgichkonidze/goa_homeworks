const product = [
    {name: 'book', price: 18},
    {name: 'pencil', price: 1},
    {name: 'iphone', price: 2500}
]
const affordable = product.some(product => product.price < 20)

console.log(affordable)