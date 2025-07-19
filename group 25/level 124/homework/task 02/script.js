let fruits = new Map([
    ['apple', 'red'],
    ['banana','yellow'],
    ['grape', 'purple']
])
fruits.set('orange', 'orange')
fruits.set('blueberry', 'blue')
fruits.delete('banana')

for (let [fruit, color] of fruits) {
    console.log(`${fruit}--${color}`)
}