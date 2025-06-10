function addValueToArray(array, value) {
    return array.push(value)
};
let exampleArray = [1, 2, 3];
let newLength = addValueToArray(exampleArray, 4);
console.log(exampleArray);
console.log(newLength);