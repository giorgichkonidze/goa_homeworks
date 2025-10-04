const fast = new Promise(resolve => setTimeout(() => resolve("Fastest!"), 100))
const medium = new Promise(resolve => setTimeout(() => resolve("Medium speed"), 300))
const slow = new Promise(resolve => setTimeout(() => resolve("Slow one"), 500))

Promise.race([fast, medium, slow])
    .then(result => console.log(result))