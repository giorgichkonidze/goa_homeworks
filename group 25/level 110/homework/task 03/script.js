function removeFalsy(arr) {
    return arr.filter(Boolean)
}
console.log(removeFalsy([0, "zdrastite", false, 43, null, ""]))