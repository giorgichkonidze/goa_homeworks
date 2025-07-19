let countries = new Map([
    ["France", "Paris"],
    ["Japan", "Tokyo"],
    ["India", "New Delhi"],
    ["Canada", "Ottawa"],
    ["Brazil", "Brasilia"]
])
for (let [country, capital] of countries) {
    console.log(`The capital of ${country} is ${capital}`);
}