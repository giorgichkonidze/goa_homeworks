function manipulatedMixedArray() {
    let mixedArray =[1,'two', 3, 'four', 5]
    let extenedArray = mixedArray.concat([true, false])

    extenedArray.copyWithin(0,2,4)
    extenedArray.fill(0,4,7)
    extenedArray.pop()
    extenedArray.shift()
    extenedArray.unshift(null, undefined)
    return extenedArray
}
console.log(manipulatedMixedArray())