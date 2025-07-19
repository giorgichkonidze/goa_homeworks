let employes = new Map([
    ['Richard', 'Developer'],
    ['Maria', 'SEO specialist'],
    ['Tom', 'Product meneger'],
    ['Davit', 'accountant'],
    ['Bob', 'Developer'],
])

let name = 'Bob'
let position = 'Developer'
employes.set(name, position)

for (let [key, value] of employes) {
    console.log(`${key} არის ${value}`)
}