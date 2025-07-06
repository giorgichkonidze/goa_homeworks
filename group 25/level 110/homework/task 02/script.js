function allFalsy(arr) {
    return arr.filter(Boolean).length === 0
}
console.log(allFalsy([0, "", false, null]))
console.log(allFalsy([0, "HiGoa", false]))