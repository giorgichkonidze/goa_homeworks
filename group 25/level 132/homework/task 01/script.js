const promise = new Promise((resolve, reject) => {
    resolve('hello, promise')
})
promise
    .then(message => console.log(message))