const x1 = Promise.reject("X")
const x2 = Promise.resolve("Y")
const x3 = Promise.reject("Z")

Promise.allSettled([x1, x2, x3])
    .then(results => {
        const rejectedCount = results.filter(r => r.status === "rejected").length
        console.log(rejectedCount)
    })