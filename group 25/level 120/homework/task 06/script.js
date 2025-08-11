const car = { make: 'Toyota', model: 'Camry', year: 2020 }

for (let key in car) {
    console.log(`${key}:= ${car[key]}`)
}