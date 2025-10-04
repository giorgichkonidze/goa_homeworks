const rejected = Promise.reject("Rejected immediately")
const delayed1 = new Promise(resolve => setTimeout(() => resolve("Delayed 1"), 200))
const delayed2 = new Promise(resolve => setTimeout(() => resolve("Delayed 2"), 400))

Promise.race([rejected, delayed1, delayed2])
    .then(result => console.log(result))
    .catch(error => console.error(error))