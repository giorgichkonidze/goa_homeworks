const nums = [
    Promise.resolve(2),
    Promise.resolve(4),
    Promise.resolve(6)
];

Promise.all(nums)
    .then(numbers => {
        const doubled = numbers.map(n => n * 2)
        console.log(doubled)
    })