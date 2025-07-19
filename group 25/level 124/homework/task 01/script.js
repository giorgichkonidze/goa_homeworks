let countries = new Map ([
    ['france', 'paris'],
    ['japan', 'tokyo'],
    ['india', 'new delhi'],
    ['canada', 'ottawa'],
    ['brazil', 'brasilia']
])

for (let [country, capital] of countries) {
    console.log(`${country} - ${capital}`)
}