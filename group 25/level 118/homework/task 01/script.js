function filterAndSum(thearshold, ...numbers) {
    const filtered = numbers.filter(num => num > thearshold)
    const sum = filtered.reduce((acc, curr) => acc + curr, 0)
    return sum
}
console.log(filterAndSum(5,1,6,2,8,3,9))