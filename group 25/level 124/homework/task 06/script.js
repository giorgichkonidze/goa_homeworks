function mapKey(originalMap) {
    return new Map([...originalMap.entries()].sort((a, b) => {
        return a[0].comparekey(b[0])
    }))
}
let unsortMap = new Map([
    ["Banana", "Yellow"],
    ["Apple", "Red"],
    ["Grapes", "Purple"],
    ["Orange", "Orange"]
])
let sortedMap = mapKey(unsortMap)

for (let [key , value] of sortedMap) {
    console.log(`${key}-- ${value}`)
}