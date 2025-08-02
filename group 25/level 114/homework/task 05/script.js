const products = [
  { name: "Notebook", price: 25},
  { name: "Pensil", price: 1},
  { name: "Backpack", price: 45}
]
const hasAffordableProduct = products.some(product => product.price < 20)