const pA = Promise.resolve("alpha")
const pB = Promise.reject("beta error")
const pC = Promise.resolve("charlie")

Promise.allSettled([pA, pB, pC])
    .then(results => {
        const fulfilled = results.filter(r => r.status === "fulfilled")
        console.log("fulfilled results:  ")
        fulfilled.forEach(r => console.log(r.value))
    })