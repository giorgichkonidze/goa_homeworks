function arrayMethods(inputArray) {
    let numArray = [1,2,3]
    let strArray = ['b', 'f', 'g']
    let sumArray = numArray.concat(strArray)

    sumArray.copyWithin(4,0,3)
    sumArray.fill(2,5)
    sumArray.pop()
    sumArray.shift()
    sumArray.unshift(100,150)
    return sumArray
}
console.log(arrayMethods)