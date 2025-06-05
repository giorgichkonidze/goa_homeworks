function concatAndAddValue(array1, array2, value) {
    let newArray = array1.concat(array2)
    newArray.push(value)
    return newArray
}

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let value = 7

let result = concatAndAddValue(array1, array2, value);
console.log(result)