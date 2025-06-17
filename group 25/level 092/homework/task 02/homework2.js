function manipulateObjects() {
    let people = [{name: "Giorgi"}, {name: "nika"}]
    let places = [{city: "georgia"}, {city: "England"}]
    let margedArray = people.concat(places)

    margedArray.copyWithin(2,0,2)
    margedArray.fill({city: "Telavi"}, margedArray.length -2)
    margedArray.pop()
    margedArray.shift()
    margedArray.unshift({name: "luka"}, {name: "Antona"})
    return margedArray
}
console.log(manipulateObjects())