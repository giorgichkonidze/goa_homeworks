const a = Promise.resolve("A")
const b = Promise.reject("B error")
const c = Promise.resolve("C")
const d = Promise.reject("D error")
const e = Promise.resolve("E")

Promise.allSettled([a, b, c, d, e])
    .then(results => {
        console.log("allSettled-summary:")
        results.forEach((result, index) => {
            console.log(`[${index + 1}]`, result.status, "-", result.value || result.reason)
        })
    })