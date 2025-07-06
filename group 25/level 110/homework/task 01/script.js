function checkType(value) {
    return (value !== Object(value)) ? "primitive" : "non-primitiv"
}
console.log(checkType(62))
console.log(checkType({}))