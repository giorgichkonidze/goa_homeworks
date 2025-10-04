const f1 = Promise.reject("Error 1")
const f2 = Promise.reject("Error 2")
const f3 = Promise.reject("Error 3")

Promise.any([f1, f2, f3])
    .then(result => console.log(result))
    .catch(error => {
        console.error(error.message)
    })