const p1 = new Promise(resolve => setTimeout(() => resolve("One"), 1000))
const p2 = new Promise(resolve => setTimeout(() => resolve("Two"), 2000))
const p3 = new Promise(resolve => setTimeout(() => resolve("Three"), 3000))

Promise.all([p1, p2, p3]).then(console.log)