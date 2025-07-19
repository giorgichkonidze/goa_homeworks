let countries = new Map([
    ['france', 'paris']
    ["Japan", "Tokyo"],
    ["India", "New Delhi"]
])
let countriesArray = Array.from(countries)
console.log(countriesArray)

let newcountries = new Map(countriesArray)
for (let [country, capital] of newcountries) {
    console.log(`${country}--${capital}`)
}