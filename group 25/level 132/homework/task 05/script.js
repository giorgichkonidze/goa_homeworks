const promise = new Promise ((resolve, reject) => {
    resolve(5)
})
promise
    .then(num => num * 2)
    .then(num => num * 2)
    .then(num => num * 2)
    .then(result => console.log(result))