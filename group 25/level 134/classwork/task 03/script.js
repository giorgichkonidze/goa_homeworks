const fail1 = Promise.reject("first failed")
const success = new Promise((resolve) => setTimeout(() => resolve("complate"), 300))
const fail2 = Promise.reject("third failed")

Promise.any([fail1, success, fail2])
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.error(error)
    })