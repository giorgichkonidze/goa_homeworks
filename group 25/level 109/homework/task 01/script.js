const person = {
    name: "Luka",
    age: 17,
    city: "Tbilisi"
}
for (let key in person ) {
    console.log(`${key}: ${person[key]}`)
}