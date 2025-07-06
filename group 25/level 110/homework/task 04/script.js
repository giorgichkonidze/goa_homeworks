function countThruthiesAndFalsies(array) {
    let thruthy = 0
    let falsy = 0
    arr.forEach(item =>{
        if(item) {
            thruthy++
        } else{
            falsy++
        }
    })
    return {thruthy, falsy}
}
console.log(countThruthiesAndFalsies([1, 0, "Why", "nothing","", null, [], {}]))