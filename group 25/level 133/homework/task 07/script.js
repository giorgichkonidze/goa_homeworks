const randomPromise = new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve("done") : reject("error")
})
randomPromise
    .then(console.log)
    .catch(console.error)
    .finally(()=> console.log("complayte"))