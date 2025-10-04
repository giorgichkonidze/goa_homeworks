const p4 = Promise.resolve("Success A")
const p5 = Promise.reject("Failure B")
const p6 = Promise.resolve("Success C")

Promise.all([p4, p5, p6])
    .then((results) => console.log(results))
    .catch((error) => console.error(error))