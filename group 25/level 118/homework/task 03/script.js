function combineArrys(str, ...arrays) {
    const combined = [str, ...arrays.flat()]
    return combined
}
console.log(combineArrys([1,2],[3.4],[5]))