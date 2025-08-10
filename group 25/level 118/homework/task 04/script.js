const obj1 = {
    a: 1,
    b: 2
}
const obj2 = {
    c: 3,
    d: 4
}
const marged = {
    ...obj1,
    ...obj2
}
console.log(marged)