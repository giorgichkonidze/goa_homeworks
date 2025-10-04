const p1 = Promise.resolve("complate")
const p2 = Promise.reject("fail")
const p3 = Promise.resolve("complate")

Promise.allSettled([p1, p2, p3])
    .then((results) => {
        console.log("promise.allsettled")
        results.forEach((result, index) => {
            console.log(`  [${index + 1}]`, result)
        })
    })