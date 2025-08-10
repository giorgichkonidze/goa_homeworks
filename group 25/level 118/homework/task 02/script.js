const product = {
    id: 101,
    name: "Laptop",
    price: 1200,
    brand: "TechCorp",
    color: "Silver",
    weight: "2kg"
};
const { id, name, ...details } = product

console.log(id)
console.log(name)
console.log(details)