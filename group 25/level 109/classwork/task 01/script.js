const car = {
    brand: "mersedes",
    model: "benz",
    color: "black"
}
for (let key in car) {
    console.log(key)
    console.log(car[key])
}
console.log(`this is ${car.brand},model ${car.model}, color ${car.color}`)