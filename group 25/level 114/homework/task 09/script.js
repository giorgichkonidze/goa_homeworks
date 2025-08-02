const items = [
  { name: "Notebook", price: 10, quantity: 2 },
  { name: "Pen", price: 2, quantity: 5 },
  { name: "Bag", price: 30, quantity: 1 }
]
const totalValue = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

console.log("Total Value of Items:", totalValue)