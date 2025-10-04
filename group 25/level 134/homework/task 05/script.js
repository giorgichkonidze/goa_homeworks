const fail1 = Promise.reject("Failed 1")
const success = Promise.resolve("success")
const fail2 = Promise.reject("Failed 2")

Promise.any([fail1, success, fail2])
    .then(result => console.log(result))
    .catch(error => console.error(error))