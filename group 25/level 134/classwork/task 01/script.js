const promise1 = Promise.resolve("first complate")
const promise2 = Promise.resolve("second complate")
const promise3 = Promise.resolve("third complate")

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results)
    })
    .catch((error) => {
        console.error(error)
    })